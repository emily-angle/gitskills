
var http = require('http');
var fs = require('fs');
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/getvdojson', function (req, res) {
  res.json([{name:'123'}])
})
http.createServer(app).listen('8080', function () {
    console.log('http://localhost:8080');
});
app.get('/', function (req, res) {
    res.sendFile(__dirname + "\\" + "index.html");
});
