const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	age: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
})

module.exports = User = mongoose.model('user', UserSchema)