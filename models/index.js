var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost");
module.exports.Post = require("./post.js");