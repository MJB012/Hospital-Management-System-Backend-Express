const { body, checkSchema, validationResult } = require("express-validator");

module.exports = async (req, res, next) => {

  doa = req.body.doa,
  purpose_of_visit = req.body.purpose_of_visit,
  user_id  = req.body.user_id;
  category_id = req.body.category_id,
  purpose_of_visit_id = req.body.purpose_of_visit_id,
  case_type_id = req.body.case_type_id,
  insurance_id = req.body.insurance_id,
  firm_id = req.body.firm_id


  await checkSchema({
    doa: {
      notEmpty: true,
      trim: true,
      errorMessage: "Date of accident is required",
    },
    purpose_of_visit: {
      notEmpty: true,
      trim: true,
      errorMessage: "Purpose of visit is required"
    },
    user_id: {
      notEmpty: true,
      trim: true,
      errorMessage: "User id is required"
    },
    category_id: {
      notEmpty: true,
      trim: true,
      errorMessage: "Category is required"
    },
    purpose_of_visit_id: {
      notEmpty: true,
      trim: true,
      errorMessage: "Purpose of visit id is required"
    },
    case_type_id: {
      notEmpty: true,
      trim: true,
      errorMessage: "Case Type is required"
    },
    insurance_id: {
      notEmpty: true,
      trim: true,
      errorMessage: "Insurance is required"
    },
    firm_id: {
      notEmpty: true,
      trim: true,
      errorMessage: "Firm is required"
    }
  }).run(req);

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.json({ status: 422, message: errors.array() })
  }

  next();

}