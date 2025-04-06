const express = require('express');
const { Patient } = require('../model/user_model');
const router = express.Router();

// Route to update patient details
router.put('/update-patient/:patientId/1440', async (req, res) => {
  try {
    const { patientId } = req.params;
    const { contact, medicalInfo, medicine } = req.body;

    // Check if at least one field is provided for update
    if (!contact && !medicalInfo && !medicine) {
      return res.status(400).json({ message: 'At least one field (contact, medicalInfo, medicine) must be provided for update' });
    }

    // Find the patient by ID
    const updatedPatient = await Patient.findOneAndUpdate(
      { patientId },
      { $set: { contact, medicalInfo, medicine } },
      { new: true }
    );

    if (!updatedPatient) {
      return res.status(404).json({ message: 'Patient not found' });
    }

    res.status(200).json({ message: 'Patient details updated successfully', patient: updatedPatient });
  } catch (error) {
    console.error('Error updating patient details:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;