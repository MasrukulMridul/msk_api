const express = require('express');
const router = express.Router();
const Doctor = require('../model/doctor');
const mongoose = require('mongoose');

//get///////////////
router.get('/',(req, res,next) =>{
 Doctor.find()
 .then(result=>{
   res.status(200).json({
      doctorData: result
   });
  })
   .catch(err=>{
    console.log(err);
    res.status(500).json({
      error:err
    })
 })
})
router.get('/:id',(req, res,next) =>{ 
  console.log(req.params.id);
  Doctor.findById(req.params.id)
  .then(result=>{
    res.status(200).json({
       doctor: result
    })
})
.catch(err=>{
  console.log(err);
  res.status(500).json({
    error:err
    })
  })
})

//post////////////////////////////////
router.post('/',(req, res,next) =>{
    
    const doctor = new Doctor({
      _id:new mongoose.Types.ObjectId,
      name: req.body.name,
      gender:req.body.gender,
      email: req.body.email,
    })
    doctor.save()
    .then(result=>{
      console.log(result);
      res.status(200).json({
        newDoctor:result
      })
    })
    .catch(err=>{
      console.log(err);
      res.status(500).json({
        error:err
      })
    })
  })




module.exports = router;