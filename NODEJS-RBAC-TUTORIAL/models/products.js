// const mongoose = require('mongoose');

// const productSchema = new mongoose.Schema({
//   name: String,
//   price: Number,
//   category: String,
//   image: String,
//   description: String,
//   stock: Number
// });

// module.exports = mongoose.model('Product', productSchema);

const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  discountPrice: Number,
  image: String,
  description: String,
  rating: Number,
  orders: Number,
  freeShipping: Boolean,
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
