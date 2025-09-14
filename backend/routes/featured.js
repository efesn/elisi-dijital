const express = require('express');
const router = express.Router();
const Featured = require('../models/Featured');

router.get('/', async (req, res) => {
  const featured = await Featured.find().populate('product');
  res.json(featured);
});

router.post('/', async (req, res) => {
  const { product } = req.body;
  const featured = new Featured({ product });
  await featured.save();
  res.status(201).json(featured);
});

module.exports = router;
