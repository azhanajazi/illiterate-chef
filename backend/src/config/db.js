
const mongoose = require("mongoose");
require("dotenv").config();

const uri = process.env.MONGODB_URI;

async function connectToDB() {
  try {
    if (!uri) {
      throw new Error("MONGODB_URI is missing from .env file");
    }

    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    throw err;
  }
}

module.exports = connectToDB;
