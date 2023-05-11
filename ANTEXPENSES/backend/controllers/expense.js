const ExpenseSchema = require ("../models/ExpenseModel")

exports.addExpense = async (req, res) => {
	const {title, amount, category, description, date} = req.body
	
	const income = ExpenseSchema({
		title,
		amount,
		category,
		description,
		date
	})
	
	try{
	//validacion de los campos
    //200 bien
    //500 error
    //400 avisos

	    if(!title || !category || !description || !date){
            return res.status(400).json({message: 'Todos los campos son requeridos'})
        }
        if(amount <= 0 || !amount === 'number'){
            return res.status(400).json({message: 'Cantidad debe ser positiva'})
        }
        await income.save()
        res.status(200).json({message: 'Gasto agregado'})
	}catch (error){
        res.status(500).json({message: 'Error del servidor'})
	}

	console.log(income)
}

//obtener la info de los ingresos
exports.getExpense = async (req, res) =>{
    try{
        const incomes = await ExpenseSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    }catch(error){
        res.status(500).json({message: 'Error del servidor'})
    }
}

//eliminar un ingreso con el id
exports.deleteExpense = async (req, res) =>{
    const {id} = req.params;
    ExpenseSchema.findByIdAndDelete(id)
        .then((income) => {
            res.status(200).json({message: 'Gasto eliminado'})
        })
        .catch((err) =>{
            res.status(500).json({message: 'Error del servidor'})
        })
    
}