const express = require('express');
const app = express();
const appointmentservice = require('./../services/AppointmentService')


module.exports.createAppointment = (req, res) => {
    appointmentservice.createData(req, res);
}

module.exports.getDoctor = (req, res) => {
    appointmentservice.getData(req, res);
}
module.exports.getTime = (req, res) => {
    appointmentservice.getData(req, res);
}
