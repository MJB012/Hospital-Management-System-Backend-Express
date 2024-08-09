const { where } = require('sequelize');
const db = require('./../models');

module.exports.createData = (req, res) => {
	res.json(req.body);
}

module.exports.getData = (req, res) => {

	if (req.query.practice_location_id && req.query.speciality_id) {
		db.User.findAll({
			where: {
				practice_location_id: req.query.practice_location_id,
				speciality_id: req.query.speciality_id
			}
		}).then(data => {
			if (data != "") {
				res.json({ status: 201, message: data });
			} else {
				res.json({ status: 201, message: "No doctor available" });
			}
		}).catch(error => {
			res.json({ status: 401, error: error });
		});
	} else {
		db.Appointment.findAll({
			where: {
				doctor_id: req.query.doctor_id,
				appointment_time_id: req.query.appointment_time_id,
				appointment_date: req.query.appointment_date
			}
		}).then(data => {
			res.json({ status: 201, message: data });
		}).catch(error => {
			res.json({ status: 401, error: error })
		})
	}
}