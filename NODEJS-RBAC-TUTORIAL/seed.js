// require('dotenv').config();
// const mongoose = require('mongoose');
// const Product = require('./models/products');
// const ProductDetail = require('./models/productDetailSchema');

// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// const sampleProducts = [
//   {
//     name: 'Canon Camera EOS 2000, Black 10x zoom',
//     price: 998.00,
//     category: 'Cameras',
//     image: '/images/product1.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     stock: 20,
//     discountPrice: 1128.00,
//     rating: 7.5,
//     orders: 154,
//     shipping: 'Free Shipping'
//   },
//   {
//     name: 'Canon Camera EOS 2000, Black 10x zoom',
//     price: 998.00,
//     category: 'Cameras',
//     image: '/images/product1.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     stock: 20,
//     discountPrice: 1128.00,
//     rating: 7.5,
//     orders: 154,
//     shipping: 'Free Shipping'
//   },
//   {
//     name: 'Canon Camera EOS 2000, Black 10x zoom',
//     price: 998.00,
//     category: 'Cameras',
//     image: '/images/product1.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     stock: 20,
//     discountPrice: 1128.00,
//     rating: 7.5,
//     orders: 154,
//     shipping: 'Free Shipping'
//   },
//   {
//     name: 'Canon Camera EOS 2000, Black 10x zoom',
//     price: 998.00,
//     category: 'Cameras',
//     image: '/images/product1.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     stock: 20,
//     discountPrice: 1128.00,
//     rating: 7.5,
//     orders: 154,
//     shipping: 'Free Shipping'
//   },
//   {
//     name: 'Canon Camera EOS 2000, Black 10x zoom',
//     price: 998.00,
//     category: 'Cameras',
//     image: '/images/product1.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     stock: 20,
//     discountPrice: 1128.00,
//     rating: 7.5,
//     orders: 154,
//     shipping: 'Free Shipping'
//   },
//   {
//     name: 'Canon Camera EOS 2000, Black 10x zoom',
//     price: 998.00,
//     category: 'Cameras',
//     image: '/images/product1.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     stock: 20,
//     discountPrice: 1128.00,
//     rating: 7.5,
//     orders: 154,
//     shipping: 'Free Shipping'
//   },
//   {
//     name: 'Canon Camera EOS 2000, Black 10x zoom',
//     price: 998.00,
//     category: 'Cameras',
//     image: '/images/product1.png',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
//     stock: 20,
//     discountPrice: 1128.00,
//     rating: 7.5,
//     orders: 154,
//     shipping: 'Free Shipping'
//   },
// ];

// Product.insertMany(sampleProducts)
//   .then(() => {
//     console.log('Sample products inserted!');
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));

  
// const seedProducts = async () => {
//   const product = new Product({
//     productName: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
//     viewImages: [
//       "productImage1.png", "productImage1.png", "productImage1.png"
//     ],
//     priceRanges: [
//       { price: 98, quantityRange: "50-100 pcs" },
//       { price: 90, quantityRange: "100-700 pcs" },
//       { price: 78, quantityRange: "700+ pcs" }
//     ],
//     // supplier: {
//     //   name: "Guanjoi Trading LLC",
//     //   country: "Germany, Berlin",
//     //   verified: true,
//     //   shipping: "Worldwide shipping"
//     // },
//     description: {
//       type: "Classic shoes",
//       material: "Plastic material",
//       design: "Modern nice",
//       customization: "Customized logo and design custom packages",
//       protection: "Refund Policy",
//       warranty: "2 years full warranty"
//     },
//     reviews: {
//       rating: 9.3,
//       reviewCount: 32
//     },
//     soldCount: 154
//   });

//   Product.insertMany(seedProducts)
//   .then(() => {
//     console.log('Seed products inserted!');
//     mongoose.connection.close();
//   })
//   .catch(err => console.log(err));


//   await product.save();
//   console.log('Product Seeded');
// };


// Import necessary packages
require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/products'); // Assuming this is the model for products

// Connect to the database
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected successfully!");
}).catch(err => {
  console.log("Error connecting to database:", err);
});

// Sample products data
const sampleProducts = [
  {
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 998.00,
    category: 'Cameras',
    image: '/images/product1.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    stock: 20,
    discountPrice: 1128.00,
    rating: 7.5,
    orders: 154,
    shipping: 'Free Shipping'
  },
  {
    name: 'Canon Camera EOS 2000, Black 10x zoom',
    price: 998.00,
    category: 'Cameras',
    image: '/images/product2.png',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    stock: 15,
    discountPrice: 1100.00,
    rating: 8.0,
    orders: 110,
    shipping: 'Free Shipping'
  },
  {
    name: 'Nikon Camera D5600, Black 12x zoom',
    price: 950.00,
    category: 'Cameras',
    image: '/images/product3.png',
    description: 'High-quality camera with 12x zoom, great for photography enthusiasts.',
    stock: 10,
    discountPrice: 1050.00,
    rating: 8.5,
    orders: 130,
    shipping: 'Free Shipping'
  },
  {
    name: 'Sony Alpha A6000, Black Mirrorless Camera',
    price: 750.00,
    category: 'Cameras',
    image: '/images/product4.png',
    description: 'Sony mirrorless camera with fast autofocus and compact design.',
    stock: 25,
    discountPrice: 800.00,
    rating: 8.7,
    orders: 200,
    shipping: 'Free Shipping'
  }
];

// Insert sample products into the database
Product.insertMany(sampleProducts)
  .then(() => {
    console.log('Sample products inserted successfully!');
    mongoose.connection.close();
  })
  .catch(err => {
    console.log('Error inserting sample products:', err);
    mongoose.connection.close();
  });

// Seed additional products with different structure if needed
const seedProducts = async () => {
  const seedProductsArray = [
    {
      name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle',
      price: 98.00,
      category: 'T-shirts',
      image: '/images/productImage1.png',
      description: 'Classic shoes made with plastic material, designed for a modern look with customization options and a 2-year warranty.',
      stock: 100,
      discountPrice: 118.00,
      rating: 9.3,
      orders: 154,
      shipping: 'Worldwide shipping'
    },
    {
      name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle (Color: Black)',
      price: 95.00,
      category: 'T-shirts',
      image: '/images/productImage2.png',
      description: 'Classic shoes made with plastic material, designed for a modern look with customization options and a 2-year warranty.',
      stock: 80,
      discountPrice: 110.00,
      rating: 8.7,
      orders: 120,
      shipping: 'Worldwide shipping'
    },
    {
      name: 'Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle (Color: White)',
      price: 100.00,
      category: 'T-shirts',
      image: 'images/productImage3.png',
      description: 'Classic shoes made with plastic material, designed for a modern look with customization options and a 2-year warranty.',
      stock: 120,
      discountPrice: 115.00,
      rating: 8.9,
      orders: 140,
      shipping: 'Worldwide shipping'
    }
    // Add more products as needed...
  ];

  try {
    await Product.insertMany(seedProductsArray);
    console.log('Seed products inserted!');
    mongoose.connection.close();
  } catch (err) {
    console.log('Error seeding products:', err);
    mongoose.connection.close();
  }
};

// Call seed function
seedProducts();
