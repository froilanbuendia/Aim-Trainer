// Controllers interact with the service

const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.send({ data: allUsers, error: null });
};

const createNewUser = async (req, res) => {
  const createdUser = await userService.createNewUser(req.body);
  if (!res) {
    res.send({ data: null, error: 'Username is taken' });
  }
  res.send({ data: createdUser, error: null });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
