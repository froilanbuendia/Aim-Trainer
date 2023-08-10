// Controllers interact with the service

const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.send({ data: allUsers, error: null });
};

const getUser = async (req, res) => {
  const user = await userService.getUser(req.body);
  res.send({ data: null, error: user });
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
  getUser,
  createNewUser,
};
