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

// Start the server
// const PORT = process.env.PORT || 7002;
const PORT = 5004;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
}); 