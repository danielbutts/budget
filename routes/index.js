const express = require('express');
const controller = require('../controllers');

const router = express.Router();

/* GET all urls. */
router.get('/data', async (req, res, next) => {
  try {
    const urls = await controller.getData();
    res.json({ urls });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
