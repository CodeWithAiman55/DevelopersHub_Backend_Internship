require("dotenv").config();
const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const connect = await mongoose.connect(process.env.CONNECTION_STRING);
    console.log(`Database Connected ${connect.connection.host}, ${connect.connection.name}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Stop app if DB fails
  }
};


module.exports = dbConnect;
