const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const doctorRoute = require('./api/routes/doctor')
const patientRoute = require('./api/routes/patient')

mongoose.connect('mongodb+srv://BDEMR:crowmsk1998@cluster0.1cbww.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

mongoose.connection.on('error', err=>{
    console.log('connection failed');
})
mongoose.connection.on('connected', connected=>{
    console.log('connected with database');
})


app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use ('/doctor',doctorRoute);
app.use ('/patient',patientRoute)


app.use((req,res,next) =>{
       res.status(200).json({
           message:'I am on..'
       })
})

app.use((req,res,next) =>{
    res.status(400).json({
       error:'sorry server error'
    })
})

module.exports = app;