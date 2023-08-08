// Service talks to the database and has the busines logic
const { v4: uuid } = require('uuid');
const User = require('../../database/User');

const getAllUsers = async () => {
  return await User.getAllUsers();
};

const createNewUser = async (newUser) => {
  // console.log('here', newUser);
  const createdUser = {
    id: uuid(),
    ...newUser,
  };
  console.log('Services:', newUser);
  const newCheckedUser = await User.checkNewUser(createdUser);
  if (newCheckedUser) {
    console.log('username already used');
    return false;
  }
  const newCreatedUser = await User.createNewUser(createdUser);
  // console.log(newCreatedUser);
  // console.log('username not used');
  return newCreatedUser;
};

module.exports = {
  getAllUsers,
  createNewUser,
};
