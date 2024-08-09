const express = require('express');
const app = express();
const axios = require('axios');
const caseservice = require('./../services/CaseService');


module.exports.createCase = (req, res) => {
  caseservice.createData(req, res);
}

module.exports.getCase = (req, res) => {
  caseservice.getData(req, res);
}
