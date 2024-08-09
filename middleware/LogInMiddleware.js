const { body, checkSchema, validationResult } = require("express-validator");
const checkPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

module.exports = async (req, res, next) => {
  email = req.body.email,
  password = req.body.password
  await checkSchema({
    email: {
      isEmail: true,
      trim: true,
      errorMessage: "Email is required and must be an email",
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
    return res.json({ status: 422, message: errors.array() })
  }

  next();

}