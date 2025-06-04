const express = require('express');
const db = require('../config/db');
const router = express.Router();

// GET all services
router.get('/', async (req, res) => {
  try {
    const [services] = await db.query('SELECT * FROM services');
    res.json(services);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching services', error: error.message });
  }
});

module.exports = router;
