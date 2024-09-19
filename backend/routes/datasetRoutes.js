// /routes/datasetRoutes.js
const express = require("express");
const { createDataset, getAllDatasets } = require("../controllers/datasetController");
const router = express.Router();

router.post("/", createDataset);  // POST /api/datasets - Upload dataset
router.get("/", getAllDatasets);  // GET /api/datasets - Get all datasets

module.exports = router;
