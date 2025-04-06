const express = require('express');
const { Patient } = require('../model/user_model');
const router = express.Router();

// Register a new patient

const registerPatient = async (req, res) => {
  try {
    const { patientId, name, contact, medicalInfo, bloodGroup, medicine } = req.body;

    // Validate required fields
    if (!patientId || !name || !contact || !medicalInfo || !bloodGroup || !medicine) {
      return res.status(400).json({ message: 'All fields are required: patientId, name, contact, medicalInfo, bloodGroup, medicine' });
    }

    const existingPatient = await Patient.findOne({ patientId });
    if (existingPatient) {
      return res.status(400).json({ message: 'Patient with this ID already exists' });
    }

    // Create a new patient
    const newPatient = new Patient({
      patientId,
      name,
      contact,
      medicalInfo,
      bloodGroup,
      medicine,
    });

    // Save the patient to the database
    await newPatient.save();

    res.status(201).json({ message: 'Patient registered successfully', patient: newPatient });
  } catch (error) {
    console.error('Error registering patient:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
// Route to register a patient
router.post('/register-patient', registerPatient);

module.exports = router;

// Route to get all patients
router.get('/getPatients_1440', async (req, res) => {
  try {
    const patients = await Patient.find(); // Fetch all patients from the database
    res.status(200).json(patients); // Send the data as a JSON response
  } catch (error) {
    console.error('Error fetching patients:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
