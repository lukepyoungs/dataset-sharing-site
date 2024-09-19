// /controllers/datasetController.js

//This file contains the logic for creating and retrieving datasets. 
//You can add more functionality here later, like deleting or updating datasets.
const { createDataset } = require("../controllers/datasetController");
const axios = require("axios");

const createDataset = async (req, res) => {
  const { name, link, description } = req.body;
  const dataset = new Dataset({ name, link, description });
  await dataset.save();

  // Create a new forum thread after dataset upload
  await axios.post('http://localhost:5000/api/forum/new-thread', {
    datasetId: dataset._id
  });

  res.status(201).json(dataset);
};

const getAllDatasets = async (req, res) => {
  const datasets = await Dataset.find();
  res.json(datasets);
};

module.exports = {
  createDataset,
  getAllDatasets,
};
