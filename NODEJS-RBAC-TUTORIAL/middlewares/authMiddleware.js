// Example authentication middleware
module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    console.log("User not authenticated, redirecting to login");
    return res.redirect('/login'); // Redirect to login page if not authenticated
  }
  console.log("User authenticated, continuing to requested route");
  next(); // Proceed to the next route
};
