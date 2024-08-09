const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/HomeController');

router.get('/:group', homecontroller.getTask);

module.exports = router;