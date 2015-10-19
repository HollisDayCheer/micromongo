var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');
var db = require('./models');
app.use(express.static('public'));

app.get("/", function(req,res){
	db.Post.find({}, function(err, posts){
		console.log(posts);
		res.render("index", {posts:posts});

	});
});

app.post("/api/posts", function(req, res){
	console.log("will add entry to database");
	console.log(req.body.content)
	db.Post.create({content:req.body.content}, function(err, post){
		if(err){
			console.log("PANIC");
		}
	})
	res.sendStatus(200);
});

app.delete("/api/posts/:id", function(req, res){
	db.Post.findOneAndRemove({_id:req.params.id}, function(err, post){
		console.log("delete worked");
	});
	res.sendStatus(200);
});

app.listen(3000, function(){
	console.log("shit's working, yo");
})

