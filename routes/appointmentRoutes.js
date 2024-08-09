const express = require('express');
const router = express.Router();
const appointmentcontroller = require('./../controllers/AppointmentController');

router.post('/create', appointmentcontroller.createAppointment);
router.get('/get-doctor', appointmentcontroller.getDoctor);
router.get('/get-appointment-time', appointmentcontroller.getTime);

module.exports = router;