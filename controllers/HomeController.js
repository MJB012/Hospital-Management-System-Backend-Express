const express = require('express');
const app = express();
const axios = require('axios');

module.exports.getTask = async (req, res) => {
  try{
    api = req.params.group;
    const response = await axios.get(`http://127.0.0.1:8000/api/${api}`);
    res.json(response.data);
  }
   catch(error) {
    res.status(500).send(error.message);
  }
}