const express = require('express');
const router = express.Router();
const User = require('../../models/user')

router.get('/', async(req, res) =>{
	try {
		const usersList = await User.find();
		return res.status(200).json(usersList)
	} catch (error) {
		console.log(error.message)
		return res.status(500).send("server error.")
	}
})

router.post('/', async(req, res) =>{
	const {name, age} = req.body;
	try {
		let user = await new User({name, age});
		const userDetails = await user.save();
		return res.status(200).json(userDetails)
	} catch (error) {
		console.log(error.message)
		return res.status(500).send("server error.")
	}
})

router.delete('/:id', async(req, res) =>{
	try {
		const deletedUser = await User.findOneAndRemove({_id: req.params.id})
		return res.status(200).json(deletedUser)
	} catch (error) {
		console.log(error.message)
		return res.status(500).send("server error.")
	}
})

module.exports = router;