// dependencies
var express = require('express');
var User = require('../models/users');
var News = require('../models/news');

var router = express.Router();

// Api user properties
User.methods(['get','put','post','delete']);
User.register(router, '/users');

// Api news properties
News.methods(['get','put','post','delete']);
News.register(router, '/news');

// return the application router
module.exports = router;
