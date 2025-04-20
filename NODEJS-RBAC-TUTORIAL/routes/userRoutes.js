const express = require("express");

const router = express.Router();

const verifyToken = require("../middlewares/verifyToken");

const authorizeRoles = require("../middlewares/authorizeRoles");

//? Only admin can access this router

router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
  res.json({ message: "Welcome Admin" });
});

//? Only admin and manager can access this router

router.get(
  "/manager",
  verifyToken,
  authorizeRoles("admin", "manager"),
  (req, res) => {
    res.json({ message: "Welcome Manager" });
  }
);

//? All can access this router

router.get(
  "/user",
  verifyToken,
  authorizeRoles("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: "Welcome User" });
  }
);

module.exports = router;
