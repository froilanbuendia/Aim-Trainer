// Routes talk to controller
const express = require('express');
const bodyParser = require('body-parser');
const userController = require('../controllers/userController');

const router = express.Router();

router.get('/', userController.getAllUsers);

router.get('/:userId', userController.getOneUser);

router.post('/', bodyParser.json(), userController.createNewUser);

router.patch('/:userId', userController.updateOneUser);

router.delete('/:userId', userController.deleteOneUser);

module.exports = router;
