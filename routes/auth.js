const express = require('express');
const router = express.Router();
// importing the whole file
const ctrl = require('../controllers');

// '/api/v1/auth'
router.post('/register', ctrl.auth.register);
router.post('/login', ctrl.auth.login);
router.post('/logout', ctrl.auth.logout);
// router.get('/verify', ctrl.auth.verify);

module.exports = router;
