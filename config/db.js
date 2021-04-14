const mongoose = require('mongoose');
const colors = require('colors');
const config = require('config');
const db = config.get('mongo_URI');
const connectDB = async() =>{
	try {
		const conn = await mongoose.connect(db,{
			 useNewUrlParser: true,
			 useUnifiedTopology: true
		})
		console.log('Mongo db connected: ', conn.connection.host.cyan.underline.bold)
	} catch (error) {
		console.log('error: ', error)
		process.exit(1)
	}
}

module.exports = connectDB;