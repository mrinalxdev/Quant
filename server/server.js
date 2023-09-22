const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

try {
  mongoose.connect(process.env.DB_URI);
  console.log("DB connected succesfully...");
} catch (error) {
  console.log(error);
}

app.listen(PORT, () => {
  console.log(`Listening at ${PORT}`);
});
