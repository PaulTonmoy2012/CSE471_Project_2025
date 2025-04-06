const mongoose = require('mongoose');

// Doctor Schema
const doctorSchema = new mongoose.Schema({
  doctorId: {
    type: String,
    required: true,
    unique: true, // Ensures doctorId is unique
  },
  specialization: {
    type: String,
    required: true, // Mandatory field
  },
  experience: {
    type: Number,
    required: true, // Mandatory field
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Patient Schema
const patientSchema = new mongoose.Schema({
  patientId: {
    type: String,
    required: true,
    unique: true, // Ensures patientId is unique
  },
  name: {
    type: String,
    required: true, // Mandatory field
  },
  contact: {
    type: String,
    required: true, // Mandatory field
  },
  medicalInfo: {
    type: String,
    required: true, // Mandatory field
  },
  bloodGroup: {
    type: String,
    required: true, // Mandatory field
  },
  medicine: {
    type: String,
    required: true, // Mandatory field
  },
}, { timestamps: true }); // Adds createdAt and updatedAt fields

// Create models
const Doctor = mongoose.model('Doctor', doctorSchema);
const Patient = mongoose.model('Patient', patientSchema);

module.exports = { Doctor, Patient };