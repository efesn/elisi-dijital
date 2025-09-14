const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const products = await Product.find().populate('seller');
  res.json(products);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id).populate('seller');
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.post('/', async (req, res) => {
  const { name, description, price, image, seller } = req.body;
  const product = new Product({ name, description, price, image, seller });
  await product.save();
  res.status(201).json(product);
});

router.put('/:id', async (req, res) => {
  const { name, description, price, image, seller } = req.body;
  const product = await Product.findByIdAndUpdate(
    req.params.id,
    { name, description, price, image, seller },
    { new: true }
  );
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

router.delete('/:id', async (req, res) => {
  const product = await Product.findByIdAndDelete(req.params.id);
  if (product) {
    res.json({ message: 'Product deleted' });
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
