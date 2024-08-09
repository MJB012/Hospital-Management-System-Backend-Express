const express = require('express');
const app = express();
const axios = require('axios');
const userservice = require('./../services/UserService');

module.exports.createUser = (req, res) => {
    userservice.createData(req, res);
}

module.exports.getUser = (req, res) => {
    userservice.getData(req, res);
}