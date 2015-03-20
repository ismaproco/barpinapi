// dependencies 
var express = require('express');
var User = require('../models/users');

var router = express.Router();

// Api user properties
User.methods(['get','put','post','delete']);
User.register(router, '/users');

// return the application router
module.exports = router;