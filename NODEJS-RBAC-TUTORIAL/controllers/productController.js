const ProductModel = require("../models/productSchema");

// Create Product
const createProductController = async (req, res) => {
  try {
    // Destructure form data and file data
    const { name, price, category, description, stock } = req.body;
    const image = req.file ? req.file.path : null; // Get image file path if uploaded

    // Create a new product
    const newProduct = new ProductModel({
      name,
      price,
      category,
      description,
      stock,
      image,
    });

    // Save the product
    await newProduct.save();
    console.log("Product saved successfully!");
    res.redirect("/products"); // Redirect to a page listing products or a confirmation page
  } catch (error) {
    console.log("Error saving product:", error);
    res.status(500).send("Error saving product!");
  }
};

module.exports = { createProductController };
