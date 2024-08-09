const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('./../models');
const { where } = require('sequelize');

module.exports.createData = (req, res) => {
	db.User.findOne({
		where: {
			email: req.body.email
		}
	}).then(email => {
		if (email) {
			res.json({ status: 401, message: "Email Already Exist" });
		} else {
			db.User.findOne({
				where: {
					first_name: req.body.first_name,
					last_name: req.body.last_name,
					dob: req.body.dob
				}
			}).then(user => {
				if (user) {
					res.json({ status: 401, message: "User with this Name and Date of Birth Already Exist" });
				} else {
					db.User.findOne({
						where: {
							ssn: req.body.ssn
						}
					}).then(ssn => {
						if (ssn) {
							res.json({ status: 401, message: "SSN already exist" });
						} else {
							db.User.create(req.body).then(success => {
								if (success) {
									res.json({ status: 201, message: "User Created Successfully" });
								} else {
									res.json({ staus: 401, message: "Error while creating a user" });
								}
							})
						}
					})
				}
			}).catch(err => {
				res.json({ status: 401, message: err });
			});
		}
	}).catch(err => {
		res.json({ status: 401, message: err });
	})
}

module.exports.getData = async (req, res) => {
	try {
		const user = await db.User.findOne({ where: { email: req.body.email } });

	if (!user) {
		return res.json({ status: 401, message: "User with this email not exist" });
	}
	const isPasswordValid = await bcrypt.compare(req.body.password, user.password);

	if (!isPasswordValid) {
		return res.json({ status: 401, message: "Invalid Password" });
	}
	const token = jwt.sign({ user: user }, 'JWT_SECRET', { expiresIn: '2h' });
	res.json({ status: 201, message: 'Login successful', token: token });
	} catch (error) {
		res.json({status: 401, message: error})
	}
}