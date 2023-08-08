// Controllers interact with the service

const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.send({ data: allUsers, error: null });
};

const createNewUser = async (req, res) => {
  // console.log('request:', req);
  const createdUser = await userService.createNewUser(req.body);
  console.log('data controller ', res);
  if (!res) {
    res.send({ data: null, error: 'Username is taken' });
  }
  res.send({ data: createdUser, error: null });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
