const mongoose = require('mongoose');

const db = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Db Connect')
    } catch (error) {
        console.log('DB connection Error')
    }
}

module.exports = () =>{
	const connectionParams = {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	};
	try{
		mongoose.connect(process.env.MONGO_URL, connectionParams);
		console.log("Connected db succesfully");
	} catch (error){
		console.log(error);
		console.log("Connected db unsuccesfully");
	}
};

module.exports = {db}