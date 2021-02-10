const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

// Set up express server
const app = express();
const port = process.env.port || 5000;

// Set up middleware
app.use(cors());
app.use(express.json());

// Set up MongoDB
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Routes
const classesRouter = require("./routes/classes");
const assessmentsRouter = require("./routes/assessments");
app.use("/classes", classesRouter);
app.use("/assessments", assessmentsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
