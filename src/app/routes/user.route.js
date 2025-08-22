const userController = require('../controllers/user.controller');
const express = require('express');
const router = express.Router();
router.get('/login', userController.login);
module.exports = router;
