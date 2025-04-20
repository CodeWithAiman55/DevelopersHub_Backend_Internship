// const jwt = require("jsonwebtoken");

// const verifyToken = (req, res, next) => {
//   let token;
//   let authHeader = req.headers.authorization;
//   if (authHeader && authHeader.startsWith("Bearer")) {
//     token = authHeader.split(" ")[1];

//     if (!token) {
//       return res.status(401).json({ message: "No token authorization denied" });
//     }

//     try {
//       const decode = jwt.verify(token, process.env.JWT_SECRET);
//       req.user = decode;
//       console.log("The decode user is ", req.user);
//       next();
//     } catch (err) {
//       res.status(400).json({ message: "Token is not valid" });
//     }
//   }else{
//     return res.status(401).json({ message: "No token authorization denied" }); 
//   }

  
// };

// module.exports = verifyToken;

// const jwt = require('jsonwebtoken');

// const verifyToken = (req, res, next) => {
//   const token = req.cookies?.token || req.headers['x-access-token'] || req.headers.authorization;

//   if (!token) {
//     return res.status(401).json({ message: "No token, authorization denied" });
//   }

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (err) {
//     return res.status(401).json({ message: "Token is not valid" });
//   }
// };

// module.exports = verifyToken;

const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.cookies.token; // ✅ Get token from cookie

  if (!token) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    console.log("✅ Token verified, user:", req.user);
    next();
  } catch (err) {
    res.clearCookie("token"); // ✅ Remove invalid token from cookie
    return res.status(401).json({ message: "Token is not valid" });
  }
};

module.exports = verifyToken;

