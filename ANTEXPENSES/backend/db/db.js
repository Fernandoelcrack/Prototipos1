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

module.exports = {db}