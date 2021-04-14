const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
var bodyParser = require('body-parser')
require('dotenv').config();
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
connectDB();
const data =[{name: "girisha", age: 25},{name:"manju", age: 26}]

app.get('/', (req, res) =>{
	res.send('Api running......')
})

app.get("/users", (req, res)=>{
	res.status(200).json(data)
})

app.use('/api/users', require('./routes/api/user'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log('listen on port', PORT))