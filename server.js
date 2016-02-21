var express = require('express');
var app = express();
var PORT = 3000;
var middleware = require('./middleware.js');

app.use(middleware.logger);

app.get('/', function(req, res) { 
    res.send('Hello NodeJs World');
});

app.get('/contact', function(reg, res) {
    res.send('<h1 rel="contact id">Contact Us at 083021900!')
})

app.listen(3000);