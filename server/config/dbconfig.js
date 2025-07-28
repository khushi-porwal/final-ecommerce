// config/dbconfig.js

import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config(); // Load environment variables from .env

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URL;

    if (!mongoURI) {
      throw new Error("❌ MONGO_URL is not defined in .env file");
    }

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("✅ Database connected successfully");
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
    process.exit(1); // Stop server if DB connection fails
  }
};

export default connectDB;
