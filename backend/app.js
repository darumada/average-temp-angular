var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'data')));

app.use(cors());

app.get('/api/temperature', (req, res) => {
  res.sendFile(__dirname + '/data/temperature.json');
});

app.get('/api/precipitation', (req, res) => {
  res.sendFile(__dirname + '/data/precipitation.json');
});

module.exports = app;
