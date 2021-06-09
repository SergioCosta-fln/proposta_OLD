const { query } = require('express');
const express = require('express');
const homeController = require('../controllers/homeController');
const userController = require('../controllers/userController');

// Rotas
const router = express.Router();
router.get('/', homeController.index);
router.get('/users/login', userController.login);
router.get('/users/register', userController.register);

module.exports = router;