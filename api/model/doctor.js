const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name: String,
    gender: String,
    email: String,
})

module.exports = mongoose.model('doctor', doctorSchema )