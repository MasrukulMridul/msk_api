const express = require('express');
const app = express();
const doctorRoute = require('./api/routes/doctor')
const patientRoute = require('./api/routes/patient')


app.use ('/doctor',doctorRoute);
app.use ('/patient',patientRoute)


app.use((req,res,next) =>{
       res.status(200).json({
           message:'I am on..'
       })
})

module.exports = app;