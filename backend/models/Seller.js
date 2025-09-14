const mongoose = require('mongoose');

const sellerSchema = new mongoose.Schema({
  name: String,
  bio: String,
  avatar: String,
  userId: String,
});

module.exports = mongoose.model('Seller', sellerSchema);
