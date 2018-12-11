var express = require('express');
const _ = require('underscore');

var app = express();

app.get('/', function (req, res) {
    res.send('Welcome to our homepage.<br/><a href="/random">Random</a> | <a href="/about">About</a>');
});
 
app.get('/random', function (req, res) {
    const randomNumber = _.random(1, 100);
    res.send('Hello Guest, you are visitor number: ' + randomNumber + '<br/> Back to <a href="/">Home</a>');
});

app.get('/about', function(req, res) {
    res.send('<h1>This is about us page</h1><br/>Back to <a href="/">Home</a>');
});


 
app.listen(3000)