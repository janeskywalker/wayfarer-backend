const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

// show all cities
router.get('/', ctrl.cities.index);

// show one city
router.get('/:id', ctrl.cities.show);

// router.post('/:id', authRequired, ctrl.cities.createPost)

module.exports = router;
