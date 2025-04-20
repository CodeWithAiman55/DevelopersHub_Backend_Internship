// module.exports = function (req, res, next) {
//   if (req.user.role !== 'admin') {
//     return res.status(403).json({ message: "Admins only!" });
//   }
//   next();
// };
module.exports = function (req, res, next) {
  const role = req.user?.role;

  console.log(("middeware runs"));
  

  if (role === 'admin') {
    // Admin allowed – redirect to admin dashboard
    return res.redirect('/adminDashboard');
  }

  if (role === 'manager' || role === 'user') {
    // Restricted for manager and user
    return res.status(403).json({ message: "Access denied! Only admins are allowed." });
  }

  // Optional: Handle unknown roles
  return res.status(403).json({ message: "Role not recognized or unauthorized access!" });
};
