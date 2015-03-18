// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// users schema
 var usersSchema = new mongoose.Schema({
 	userName: String,
 	password: String,
 	name: String,
 	lastName: String,
 	birthDate: String,
 	email: String,
 	imageUrl: String,
 	twitterAccount: String,
 	googleAccount: String,
 	facebookAccount: String
 });

// return the users schema
 module.exports = restful.model('Users', usersSchema);