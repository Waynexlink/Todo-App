//intialize express server 
const express = require('express')
//intialize mongoose to connect to database 
const mongoose = require('mongoose')

//start up express server 
const app = express()
//connection to MongoDB
mongoose.connect('mongodb://localhost:27017/todo_express')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine' ,'ejs')

//routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))
//server configuration 
app.listen(3000,()=> console.log('server started listening on port :3000'))
