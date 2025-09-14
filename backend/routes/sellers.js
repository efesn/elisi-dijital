const express = require('express');
const router = express.Router();
const Seller = require('../models/Seller');

router.get('/:id', async (req, res) => {
  const seller = await Seller.findById(req.params.id);
  if (seller) {
    res.json(seller);
  } else {
    res.status(404).json({ message: 'Seller not found' });
  }
});

router.post('/', async (req, res) => {
  const { name, bio, avatar, userId } = req.body;
  const seller = new Seller({ name, bio, avatar, userId });
  await seller.save();
  res.status(201).json(seller);
});

router.put('/:id', async (req, res) => {
  const { name, bio, avatar, userId } = req.body;
  const seller = await Seller.findByIdAndUpdate(
    req.params.id,
    { name, bio, avatar, userId },
    { new: true }
  );
  if (seller) {
    res.json(seller);
  } else {
    res.status(404).json({ message: 'Seller not found' });
  }
});

module.exports = router;
