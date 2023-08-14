// Routes talk to controller
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', bodyParser.json(), userController.getAllUsers);

router.get('/user?', bodyParser.json(), userController.getUser);

router.post('/', bodyParser.json(), userController.createNewUser);

module.exports = router;
