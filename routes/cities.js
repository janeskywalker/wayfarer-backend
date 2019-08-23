const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const authRequired = require('../middleware/authRequired');

// show all cities
router.get('/', authRequired, ctrl.cities.index);

// show one city
router.get('/:id', authRequired, ctrl.cities.show);

// router.post('/:id', authRequired, ctrl.cities.createPost)

module.exports = router;
