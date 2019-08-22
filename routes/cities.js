const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// show one 
router.get('/', authRequired, ctrl.cities.index);

module.exports = router;
