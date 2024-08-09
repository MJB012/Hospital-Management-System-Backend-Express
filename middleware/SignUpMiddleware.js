const { body, checkSchema, validationResult } = require("express-validator");
const checkSsn = /^(?!(000|666|9))\d{3}-(?!(00))\d{2}-(?!(0000))\d{4}$/;
const checkPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

module.exports = async (req, res, next) => {
	role_id = req.body.role_id,
	practice_location_id = req.body.practice_location_id,
	speciality_id = req.body.speciality_id,
	first_name = req.body.first_name,
	last_name = req.body.last_name,
	email = req.body.email,
	gender = req.body.gender,
	dob = req.body.dob,
	ssn = req.body.ssn,
	address = req.body.address,
	city = req.body.city,
	state = req.body.state,
	zip_code = req.body.zip_code,
	password = req.body.password	
	await checkSchema({
		role_id: {
			notEmpty: true,
			trim: true,
			errorMessage: "Role Id is required",
			isNumeric: {
				errorMessage: "Role Id must be a number"
			}
		},
		practice_location_id: {
			notEmpty: true,
			trim: true,
			errorMessage: "Practice location is required",
			isNumeric: {
				errorMessage: "Practice location must be a number"
			}
		},
		speciality_id: {
			notEmpty: true,
			trim: true,
			errorMessage: "Speciality Id is required",
			isNumeric: {
				errorMessage: "Speciality Id must be a number"
			}
		},
		first_name: {
			notEmpty: true,
			trim: true,
			errorMessage: "First Name is required",
			isAlpha: {
				locale: 'en-US',
				errorMessage: "First Name must be a string of character",
			},
			isLength: {
				options: {
					min: 3,
					max: 15,
				},
				errorMessage: "First Name must between 3 and 15"
			}
		},
		last_name: {
			notEmpty: true,
			trim: true,
			errorMessage: "Last Name is required",
			isAlpha: {
				locale: 'en-US',
				errorMessage: "Last Name must be a string of character",
			},
			isLength: {
				options: {
					min: 3,
					max: 15,
				},
				errorMessage: "Last Name must between 3 and 15"
			}
		},
		email: {
			isEmail: true,
			trim: true,
			errorMessage: "Email is required and must be an email",
		},
		gender: {
			notEmpty: true,
			trim: true,
			errorMessage: "Gender is required",
		},
		dob: {
			isDate: true,
			trim: true,
			errorMessage: "Date of Birth is required",
		},
		ssn: {
			notEmpty: true,
			trim: true,
			errorMessage: "SSN is Required",
			matches: {
				options: checkSsn,
				errorMessage: "Enter Valid SSN"
			}
		},
		address: {
			notEmpty: true,
			trim: true,
			errorMessage: "Address is required"
		},
		city: {
			notEmpty: true,
			trim: true,
			errorMessage: "City is required"
		},
		state: {
			notEmpty: true,
			trim: true,
			errorMessage: "State is required"
		},
		zip_code: {
			notEmpty: true,
			trim: true,
			errorMessage: "Zip Code is required",
			isNumeric: {
				errorMessage: "Zip Code must be a number"
			}
		},
		password: {
			notEmpty: true,
			trim: true,
			matches: {
				options: checkPassword,
				errorMessage: "Password must contain at least one upper case one lower case one digit and one special character"
			}
		}
	}).run(req);

	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.json({status: 422, message: errors.array() })
	}

	if (role_id == 2 && practice_location_id == 1 && speciality_id == 1) {
		return res.json({status: 401, message: "Please select the practice Location and Speciality"});
	}

	next();
}