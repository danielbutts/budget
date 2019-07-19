const db = require('../services/dbService');

// get all urls
const getData = async () => {
  try {
    const data = await db.getData();
    return data;
  } catch (error) {
    console.error('getData', error.message);
    throw error;
  }
};

module.exports = {
  getData,
};
