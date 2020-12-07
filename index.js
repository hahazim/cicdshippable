//importing node framework
var express = require('express');
var open = require('open');
 
var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
res.send('hello World');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000);
open('http://18.138.250.62:3000/');
console.log("index.js started");
 
module.exports = app;