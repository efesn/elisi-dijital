const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'supersecretkey123';

router.post('/register', async (req, res) => {
  console.log('--- REGISTER ATTEMPT ---');
  console.log('Request body:', req.body);
  const { username, password } = req.body;
  try {
    console.log('Checking for existing user:', username);
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      console.log('Username already exists:', username);
      return res.status(400).json({ message: 'Username already exists' });
    }
    console.log('Hashing password...');
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    console.log('Saving new user to MongoDB:', user);
    await user.save();
    console.log('User registered successfully:', user);
    res.status(201).json({ message: 'User registered' });
  } catch (err) {
    console.error('Registration error:', err);
    if (err.name === 'MongoServerError' || err.name === 'MongoError') {
      console.error('MongoDB error details:', err);
    }
    res.status(500).json({ message: 'Registration failed', error: err.message });
  }
});

router.post('/login', async (req, res) => {
  console.log('--- LOGIN ATTEMPT ---');
  console.log('Request body:', req.body);
  const { username, password } = req.body;
  try {
    console.log('Looking up user:', username);
    const user = await User.findOne({ username });
    if (!user) {
      console.log('User not found:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log('Comparing password for user:', username);
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      console.log('Password mismatch for user:', username);
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    console.log('Password match, generating JWT for user:', username);
    const token = jwt.sign({ userId: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ message: 'Login successful', token });
  } catch (err) {
    console.error('Login error:', err);
    if (err.name === 'MongoServerError' || err.name === 'MongoError') {
      console.error('MongoDB error details:', err);
    }
    res.status(500).json({ message: 'Login failed', error: err.message });
  }
});
// JWT middleware for protected routes
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });
  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Example protected route
router.get('/me', authMiddleware, async (req, res) => {
  const user = await User.findById(req.user.userId).select('-password');
  res.json(user);
});

module.exports = router;
