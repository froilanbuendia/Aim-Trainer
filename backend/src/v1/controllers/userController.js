// Controllers interact with the service

const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.send({ data: allUsers, error: null });
};

const getUsername = async (req, res) => {
  const userResult = await userService.getUsername(req.params.username);
  res.send({ data: userResult, error: null });
};

const createNewUser = async (req, res) => {
  const createdUserResult = await userService.createNewUser(req.body);
  if (typeof createdUserResult === 'string') {
    res.send({ data: null, error: createdUserResult });
  } else {
    res.send({ data: createdUserResult, error: null });
  }
};

module.exports = {
  getAllUsers,
  getUsername,
  createNewUser,
};
