var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var schemaDataLogin = new mongoose.Schema({
    username: String,
    password: String});

// Adds username, hash, and salt fields, plus helper methods (register, authenticate, etc.)
schemaDataLogin.plugin(passportLocalMongoose);

module.exports = mongoose.model("DataLogin", schemaDataLogin);