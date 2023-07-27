const userService = require("../services/userService");

const getAllUsers = (req, res) => {
  const allUsers = userService.getAllUsers();
  res.send("Get all users");
};

const getOneUser = (req, res) => {
  const user = userService.getOneUser();
  res.send("Get an existing user");
};

const createNewUser = (req, res) => {
  const createdUser = userService.createNewUser();
  res.send("Create a new user");
};

const updateOneUser = (req, res) => {
  const updatedUser = userService.createNewUser();
  res.send("Update an existing user");
};

const deleteOneUser = (req, res) => {
  userService.deleteOneUser();
  res.send("Delete and existing user");
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
