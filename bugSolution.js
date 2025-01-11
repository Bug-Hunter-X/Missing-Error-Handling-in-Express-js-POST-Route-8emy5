const express = require('express');
const app = express();
app.use(express.json());
app.post('/users', (req, res) => {
  const user = req.body;
  if (!user || !user.name || !user.email) {
    return res.status(400).json({ error: 'Missing or invalid user data' });
  }
  try {
    db.saveUser(user);
    res.status(201).send();
  } catch (error) {
    console.error('Error saving user:', error);
    res.status(500).json({ error: 'Failed to save user' });
  }
});