var express = require("express");
var router = express.Router();
var passport = require("passport");
var schemaDataLogin = require("../models/ModelLogin");
var schemaHistori = require("../models/DataHistori");
var schemaTest = require("../models/DataTest");
var middleware = require("../middleware");

router.get("/", function(req, res) {
  res.render("Home");
});

router.get("/Home", function(req, res) {
  res.render("Home");
});

router.get("/Register", function(req, res) {
  res.render("Register");
});

router.post("/Register", function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  schemaDataLogin.register(new schemaDataLogin({ username: username }), password, function (err) {
    if (err) {
      req.flash("error", err.message);
      return res.redirect("/Register");
    }
    passport.authenticate("local")(req, res, function () {
      if (username === "Admin") {
        res.redirect("/IndexAdmin");
      } else {
        res.redirect("/IndexMhs");
      }
    });
  });
});

router.post("/Login", passport.authenticate("local",
  {
    failureRedirect: "/Login",
    failureFlash: "Username atau password salah"
    }), function(req, res) {

      if(req.body.username=='Admin'){
        console.log('Login as Admin')
        res.redirect('/IndexAdmin')

      }
      else{
        console.log('Login As Mhs/User')

        res.redirect('/IndexMhs')
      }
});

router.get("/IndexAdmin", middleware.isAdmin, function(req, res) {
  res.render("IndexAdmin");
});

router.get("/DRek", middleware.isLoggedIn, function(req, res) {
  res.render("DRek");
});


router.get("/Login", function(req, res) {
  res.render("Login");
});

router.get("/inputNilai", middleware.isLoggedIn, function(req, res) {
  res.render("inputNilai");
});

router.get("/IndexMhs", middleware.isLoggedIn, (req, res)=>{
  schemaHistori.find({}, function(err,data) {
    res.render("IndexMhs",{
      datalist : data
    })
  })
});

router.get("/Rekomendasi", middleware.isLoggedIn, (req, res)=>{
  schemaTest.find({}, function(err,data) {
    res.render("Rekomendasi",{
      datalist : data
    })
  })
});


router.get("/DNilaiAdm", middleware.isAdmin, (req, res)=>{
  schemaTest.find({}, function(err,data) {
    res.render("DNilaiAdm",{
      matakuliahd : data
    })
  })
});

router.get("/DNilaiMhs", middleware.isLoggedIn, (req, res)=>{
  schemaTest.find({}, function(err,data) {
    res.render("DNilaiMhs",{
      datalist : data
    })
  })
});

router.get("/input", middleware.isLoggedIn, function(req, res) {
  res.render("input");
});

router.get("/HasilRek", middleware.isLoggedIn, (req, res)=>{
  schemaHistori.find({}, function(err,data) {
    res.render("HasilRek",{
      datalist : data
    })
  })
});



module.exports = router;
  
  