const { pool, client } = require("./db");

const DB = require("./users");

const getAllUsers = async () => {
  await pool.query("SELECT NOW()");

  await client.connect();

  console.log(await client.query("SELECT NOW()"));

  await client.end();
};
