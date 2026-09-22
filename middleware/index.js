// all the middleware goes here
var middle = {};

middle.isLoggedIn = function (req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  req.flash("error", "Silakan login terlebih dahulu");
  res.redirect("/Login");
};

middle.isAdmin = function (req, res, next) {
  if (req.isAuthenticated() && req.user.username === "Admin") {
    return next();
  }
  req.flash("error", "Halaman ini khusus untuk admin");
  res.redirect("/Login");
};

module.exports = middle;