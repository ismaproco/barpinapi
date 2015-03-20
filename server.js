// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var CONF = require('./conf.js')

// Database Connection
mongoose.connect( CONF.dbConnection );

var app = express();

// express properties
app.use(bodyParser.urlencoded( { extended:true } ));
app.use(bodyParser.json());

// routes definition
// the api managment
app.use('/api', require('./routes/api.js'));
// the main page
app.use('/',function(req,res){
     res.sendFile('index.html', {"root": __dirname});
});


// server port listening
app.listen( CONF.port );
console.log('API is running in ' + CONF.port );