// /models/datasetModel.js
const mongoose = require("mongoose");

const datasetSchema = new mongoose.Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  description: { type: String },
});

const Dataset = mongoose.model("Dataset", datasetSchema);
module.exports = Dataset;
