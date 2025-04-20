// const express = require('express');
// const router = express.Router();
// const isAdmin = require('../middlewares/isAdmin');
// const Product = require('../models/Product');
// const authenticate = require('../middlewares/authorizeRoles');

// // 🔒 Only admin can add products
// router.post('/add-product', authenticate, isAdmin, async (req, res) => {
//   try {
//     const { name, price } = req.body;
//     const newProduct = new Product({ name, price });
//     await newProduct.save();
//     res.status(201).json({ message: 'Product added!' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

// module.exports = router;

// const express = require('express');
// const verifyToken = require('../middlewares/verifyToken');
// const authorizeRoles = require('../middlewares/authorizeRoles');

// const router = express.Router();

// // Only admin can access this route
// router.post('/addProduct', verifyToken, authorizeRoles('admin'), (req, res) => {
//   // Code for adding a product goes here
//   res.json({ message: 'Product added successfully' });
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const Product = require('./../models/products'); // Ensure yeh sahi model hai
const Product = require('./../models/productDetailSchema'); // Ensure yeh sahi model hai

// Product Detail Route
// router.get('/products/:id', async (req, res) => {
//     try {
//         const product = await Product.findById(req.params.id);
//         if (!product) {
//             return res.status(404).send('Product not found');
//         }
//         res.render('productDetail', { product });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// });


router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    
    if (!product) {
      return res.status(404).send('Product not found');
    }
    
    // Make sure `viewImages` is always an array
    product.viewImages = product.viewImages || []; 

    res.render('productDetailPage', { product });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching product');
  }
  
});

module.exports = router;
