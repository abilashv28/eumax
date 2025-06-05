const db = require('../config/db');

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    res.status(201).json({
      message: 'Message sent successfully',
      id: result.insertId
    });
  } catch (error) {
    res.status(500).json({
      message: 'Error submitting message',
      error: error.message
    });
  }
};
