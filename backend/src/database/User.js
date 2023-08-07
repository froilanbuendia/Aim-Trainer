// All database interactions with the User table

const { pool } = require('./db');

const getAllUsers = async () => {
  const res = await pool.query('select * from users');
  return res.rows;
};

const createNewUser = async (newUser) => {
  const values = [newUser.id, newUser.name, newUser.username, newUser.email, newUser.highest_score];
  const res = await pool.query(
    `insert into users(id, name, username, email, highest_score) values($1, $2, $3, $4, $5) returning *`,
    values,
  );
  // console.log('Result:', res.rows[0]);
  return res.rows[0];
};

const checkNewUser = async (newUser) => {
  const checkUser = await pool.query(
    `select username from users where username = '${newUser.username}'`,
  );
  // console.log('checking username query', checkUser);
  if (checkUser.rows.length >= 1) {
    return true;
  }
};
module.exports = {
  getAllUsers,
  createNewUser,
  checkNewUser,
};
