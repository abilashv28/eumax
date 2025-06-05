const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// POST contact form submission
router.post('/', contactController.submitContactForm);

module.exports = router;
