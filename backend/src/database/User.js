// All database interactions with the User table

const { pool } = require('./db');

const getAllUsers = async () => {
  const res = await pool.query('select * from users');
  return res.rows;
};
const getUser = async (username) => {
  const res = await pool.query(`select * from users where username = '${username}'`);
  return res.rows[0];
};
const createNewUser = async (newUser) => {
  const values = [newUser.id, newUser.name, newUser.username, newUser.email, newUser.highest_score];
  const res = await pool.query(
    `insert into users(id, name, username, email, highest_score) values($1, $2, $3, $4, $5) returning *`,
    values,
  );
  return res.rows[0];
};

const doesUsernameExist = async (username) => {
  const checkUserObject = await pool.query(`select * from users where username = '${username}'`);
  if (checkUserObject.rows.length >= 1) {
    return true;
  }
  return false;
};
module.exports = {
  getAllUsers,
  getUser,
  createNewUser,
  doesUsernameExist,
};
