// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Database Connection
mongoose.connect('mongodb://localhost/barpindb');

var app = express();

// express properties
app.use(bodyParser.urlencoded( { extended:true } ));
app.use(bodyParser.json());

// routes definition
app.use('/api', require('./routes/api.js'));


// server port listening
app.listen( 3000 );
console.log('API is running in 3000');