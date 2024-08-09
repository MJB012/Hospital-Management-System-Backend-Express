const express = require('express');
const router = express.Router();
const usercontroller = require('./../controllers/UserController');
const signUpMiddleware = require('../middleware/SignUpMiddleware');
const logInMiddleware = require('./../middleware/LogInMiddleware');

router.post('/create', signUpMiddleware, usercontroller.createUser);
router.post('/login', logInMiddleware, usercontroller.getUser);

module.exports = router;