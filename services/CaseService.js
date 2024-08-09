const { where, Model } = require('sequelize');
const db = require('./../models');
const { getPagination, getPagingData } = require('./Pagination');

module.exports.createData = (req, res) => {
  db.PatientCase.create(req.body).then(success => {
    if (success) {
      if (success) {
        res.json({ status: 201, message: "Case Created Successfully" });
      } else {
        res.json({ status: 401, message: "Error while creating a Case" });
      }
    }
  }).catch(err => {
    res.json({ status: 401, message: err });
  });
}

module.exports.getData = (req, res) => {
  // console.log(req.query, "Aa gya");
  const page = req.query.page;
  const size = req.query.limit;
  // console.log(page, size, "fsdifurbf");
  const { limit, offset } = getPagination(page, size);
  db.PatientCase.findAndCountAll({
    where: { user_id: req.params.id },
    limit,
    offset,
    include: [
      {
        model: db.Category,
        attributes: ['name']
      },
      {
      model: db.PurposeOfVisit,
      attributes: ['name']
    },
    {
      model: db.CaseType,
      attributes: ['name']
    }    
  ]
  }).then(data => {
    const response = getPagingData(data, page, limit);
    res.json({ status: 201, message: response });
  }).catch(error => {
    res.json({status: 401, error: error});
  })
}
