require("dotenv").config();

var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var flash = require("connect-flash");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var methodOverride = require("method-override");
var indexRoutes = require("./Routes/Index");
const matakuliahRouter= require("./Routes/datamatakuliah");
var schemaDataLogin = require("./models/ModelLogin");

if (!process.env.SESSION_SECRET) {
  throw new Error("SESSION_SECRET environment variable is required. See .env.example.");
}

app.use(require("express-session")({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());


passport.use(new LocalStrategy(schemaDataLogin.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(schemaDataLogin.serializeUser());
passport.deserializeUser(schemaDataLogin.deserializeUser());

// variables passed to every single template
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

if (!process.env.DATABASEURL) {
  throw new Error("DATABASEURL environment variable is required. See .env.example.");
}
mongoose.connect(process.env.DATABASEURL, {useUnifiedTopology: true,useNewUrlParser: true});

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
//seedDb();

app.use("/", indexRoutes);
app.use("/datamatakuliah",matakuliahRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`app listening on port ${port}`));