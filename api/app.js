const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express();

mongoose.connect('mongodb://127.0.0.1:27017/todo');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('hahahah connected')
});

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}))

app.use('/', routes)

module.exports = app;
