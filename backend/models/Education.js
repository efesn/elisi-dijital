const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  title: String,
  description: String,
  content: String,
  image: String,
});

module.exports = mongoose.model('Education', educationSchema);
