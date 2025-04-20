const cookieParser = require("cookie-parser");
const dotenv = require("dotenv").config();
const express = require("express");
const dbConnect = require("./config/dbConnect");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const isAdmin = require("./middlewares/isAdmin");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const path = require("path");
const routes = require("./routes/routes");
const productRoutes = require("./routes/productRoutes");
const verifyToken = require("./middlewares/verifyToken");
const authMiddleware = require("./middlewares/verifyToken");
const route = require("./routes/route");
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
// app.use("/dashboardRoutes", routes);
app.use("/routes", route);
app.use('/api/admin', authMiddleware, authRoutes);
app.use('/api/user', authMiddleware, userRoutes);
// Routes
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.get("/homeController", routes);
app.post("/homeController", routes);
app.get("/", (req, res) => {
  res.render("credentials");
});

app.get("/register", (req, res) => {
  res.render("register");
});



app.get("/home", (req, res) => {
  res.render("home");
});


// Admin Dashboard route
app.get('/adminDashboard', authMiddleware, (req, res) => {
  res.render('adminDashboard'); 
});

app.get('/index', (req,res) => {
  res.render('index');
})


// Login route
app.get('/login', (req, res) => {
 
  res.render('login');
});

// Calling function
dbConnect();



app.use('/images', express.static('public/images'));

app.use(express.urlencoded({ extended: true })); // form data handle karne ke liye
// app.use('/images', express.static(path.join(__dirname, 'public', 'images')));
// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection error:', err));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/images', express.static('public/images'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.get('/', async (req, res) => {
  try {
    const featuredProducts = await Product.find({}).limit(5);  // Adjust the limit based on how many products you want to show
    res.render('index', { products: featuredProducts }); // Rendering home.ejs with featured products
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching products');
  }
});

// Products Route
app.get('/products', async (req, res) => {
  try {
    // Product listing page pe products fetch karna
    const products = await Product.find();
    res.render('product', { products }); // "product.ejs" page me products pass karo
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching products');
  }
});

app.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send('Product not found');
    }
    res.render('productDetailPage', { product });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching product details');
  }
  z
});



// Route for product detail page
app.get('/productDetailPage/:id', (req, res) => {
  const productId = req.params.id; // Get product ID from URL

  // Find the product in the database by its ID
  Product.findById(productId)
    .then(product => {
      if (!product) {
        return res.status(404).send('Product not found'); // Handle product not found
      }
      // Send product data to EJS view
      res.render('productDetailPage', { product });
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Server error');
    });
});





router.get("/productDetailPage/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).render("notFoundPage");
    }

    res.render("productDetailPage", { product });
  } catch (err) {
    console.error(err);
    res.status(500).render("errorPage");
  }
});



app.get('/cart', (req, res) => {
  res.render('cartPage');
});

app.listen(PORT, () => {
  console.log(`Server is listening on https://localhost:${PORT}`);
});


// Start the server
// const PORT = process.env.PORT || 7002;
const PORT = 5004;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
}); 