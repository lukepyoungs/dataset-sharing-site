// server.js
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const datasetRoutes = require("./routes/datasetRoutes");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());  // Parse incoming JSON requests

// Connect to the database
connectDB();

// Define routes
app.use("/api/datasets", datasetRoutes);

// Start the server
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Welcome to Dataset Hub API!");
  });
  
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
