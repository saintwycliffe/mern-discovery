require('dotenv').config();
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

// Mongoose stuff
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/MERN', {useMongoClient: true});

// Set up middleware
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
app.use(express.static(path.resolve(__dirname, 'client', 'build')));

// Controllers
// app.use('/auth', require('./routes/auth'));

app.get('*', function(req, res, next) {
	res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

module.exports = app;
