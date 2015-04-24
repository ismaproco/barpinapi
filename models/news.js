// dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// news schema
 var newsSchema = new mongoose.Schema({
   currentUserLiked: Boolean,
   currentUserSaved: Boolean,
   cType: String,
   authorName: String,
   eventName: String,
   text: String,
   dateTime: Date,
   authorImg: String,
   hots: Number,
   categories: Array
 });

// return the news schema
 module.exports = restful.model('News', newsSchema);
