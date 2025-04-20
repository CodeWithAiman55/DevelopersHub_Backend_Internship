// routes/routes.js
const express = require("express");
const router = express.Router();

// Example route for dashboard
router.get("/dashboard", (req, res) => {
  res.render("dashboard"); // render dashboard page
});

// Add more routes for the dashboard if needed
// router.get("/anotherRoute", (req, res) => { ... });

module.exports = router; // Export the router to use it in index.js
