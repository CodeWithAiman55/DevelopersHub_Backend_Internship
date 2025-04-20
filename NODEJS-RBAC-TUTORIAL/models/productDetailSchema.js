const mongoose = require('mongoose');

// Define the schema for the product
const productDetailSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  image: {
    type: String, // URL or filename of the main image
    required: true
  },
  viewImages: {
    type: [String], // Array of image filenames/URLs for additional images
    default: [] // Default to an empty array if no images are provided
  }
}, { timestamps: true });

// Create the model from the schema
const ProductDetail = mongoose.model('ProductDetail', productDetailSchema);

module.exports = ProductDetail;
