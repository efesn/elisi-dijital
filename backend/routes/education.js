const express = require('express');
const router = express.Router();
const Education = require('../models/Education');

router.get('/', async (req, res) => {
  const items = await Education.find();
  res.json(items);
});

router.post('/', async (req, res) => {
  const { title, description, content, image } = req.body;
  const item = new Education({ title, description, content, image });
  await item.save();
  res.status(201).json(item);
});

module.exports = router;
