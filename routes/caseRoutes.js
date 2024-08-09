const express = require('express');
const router = express.Router();
const casemiddleware = require('./../middleware/CaseMiddleware');
const casecontroller = require('./../controllers/CaseController');

router.post('/create', casemiddleware, casecontroller.createCase);
router.get('/get/:id?', casecontroller.getCase);

module.exports = router;