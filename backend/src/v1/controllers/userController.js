// Controllers interact with the service

const userService = require('../services/userService');

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();
  res.send({ data: allUsers, error: null });
};

const getOneUser = (req, res) => {
  const user = userService.getOneUser();
  res.send('Get an existing user');
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

const updateOneUser = (req, res) => {
  const updatedUser = userService.createNewUser();
  res.send('Update an existing user');
};

const deleteOneUser = (req, res) => {
  userService.deleteOneUser();
  res.send('Delete and existing user');
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
