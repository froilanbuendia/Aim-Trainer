require("dotenv").config({ path: "../.env" });

const DB_USER = process.env.DB_USER;
const DB_HOST = process.env.DB_HOST;
const DB_NAME = process.env.DB_NAME;
const DB_PWD = process.env.DB_PWD;
const DB_PORT = process.env.DB_PORT;

module.exports = {
  DB_USER,
  DB_HOST,
  DB_NAME,
  DB_PWD,
  DB_PORT,
};
