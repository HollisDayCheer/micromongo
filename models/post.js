var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
	content : String
});

var Post =  mongoose.model("Posts", postSchema);
module.exports = Post;