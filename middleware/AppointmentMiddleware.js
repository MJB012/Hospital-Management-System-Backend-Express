const { body, checkSchema, validationResult } = require("express-validator");

module.exports.validation = async (req, res, next) => {

	patient_case_id = req.body.patient_case_id,
	case_id = req.body.case_id,
	appointment_type_id = req.body.appointment_type_id,
	practice_id = req.body.practice_id
	speciality_id = req.body.speciality_id

	}
