const express = require('express');
const router = express.Router();
const Story = require('../models/Story');

router.get('/', async (req, res) => {
  const stories = await Story.find();
  res.json(stories);
});

router.post('/', async (req, res) => {
  const { title, content, image } = req.body;
  const story = new Story({ title, content, image });
  await story.save();
  res.status(201).json(story);
});

module.exports = router;
