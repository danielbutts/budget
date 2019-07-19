const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

const getAllData = async () => {
  try {
    const result = await pool.query('SELECT * FROM data');
    return row;
  } catch (err) {
    console.error('getAllData', err.message);
    throw err;
  }
};

module.exports = {
  getAllData
};
