const mongoose = require('mongoose');

const featuredSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
});

module.exports = mongoose.model('Featured', featuredSchema);
