var express = require('express');
var app = express();

app.get('/', function(req, res) { 
    res.send('Hello NodeJs World');
});

app.get('/contact', function(reg, res) {
    res.send('<h1 rel="abcasd">Contact Us at 083021900!')
})

app.listen(3000);