// Service talks to the database and has the busines logic
const { v4: uuid } = require("uuid");
const User = require("../database/User");

const getAllUsers = async () => {
  return await User.getAllUsers();
};

const getOneUser = () => {
  return;
};

const createNewUser = async (newUser) => {
  const createdUser = {
    id: uuid(),
    ...newUser,
  };
  const newCreatedUser = await User.createNewUser(createdUser);
  return newCreatedUser;
};

const updateOneUser = () => {
  return;
};

const deleteOneUser = () => {
  return;
};

module.exports = {
  getAllUsers,
  getOneUser,
  createNewUser,
  updateOneUser,
  deleteOneUser,
};
