var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');

app.use("/static", express.static('public'));

app.get("/", function(req,res){
	res.render("index");
})
var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function(callback){
		console.log("CONNECTED TO MONGO");
		console.log("FUCK CHRIS");
	});

app.listen(3000, function(){
	console.log("shit's working, yo");
})

