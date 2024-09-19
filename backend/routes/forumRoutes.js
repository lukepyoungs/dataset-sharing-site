const express = require('express');
const ForumThread = require('../models/forumModel');
const Dataset = require('../models/datasetModel');
const router = express.Router();

// Create a new thread when a dataset is uploaded
router.post('/new-thread', async (req, res) => {
  const { datasetId } = req.body;
  const dataset = await Dataset.findById(datasetId);

  const newThread = new ForumThread({
    datasetId,
    title: `Discussion on ${dataset.name}`,
    posts: [{ content: `This thread is about the dataset: ${dataset.description}` }],
  });

  await newThread.save();
  res.json(newThread);
});

// Get all forum threads
router.get('/threads', async (req, res) => {
  const threads = await ForumThread.find().populate('datasetId');
  res.json(threads);
});

module.exports = router;
