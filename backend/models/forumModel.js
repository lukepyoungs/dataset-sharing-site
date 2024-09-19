const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const forumThreadSchema = new mongoose.Schema({
  datasetId: { type: mongoose.Schema.Types.ObjectId, ref: 'Dataset', required: true },
  title: { type: String, required: true },
  posts: [postSchema],
  createdAt: { type: Date, default: Date.now },
});

const ForumThread = mongoose.model('ForumThread', forumThreadSchema);
module.exports = ForumThread;
