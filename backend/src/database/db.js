const { Pool, Client } = require('pg');
const { DB_USER, DB_HOST, DB_NAME, DB_PWD, DB_PORT } = require('../config');

const DB_CONFIG = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PWD,
  port: DB_PORT,
};

const pool = new Pool(DB_CONFIG);

const client = new Client(DB_CONFIG);

module.exports = { pool, client };
