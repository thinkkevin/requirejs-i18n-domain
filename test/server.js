// server.js
var connect = require('connect'),
	// dispatch = require('dispatch'),
	// quip = require('quip'),
	// fs = require("fs"),
	// url = require("url"),
	server = connect.createServer(),
	// request = require('request'),
	// remote_host = 'https://myaccount.m.srwd68.com',
	path = require('path'),
	port = 9000;

server
// .use(quip())
.use(connect.static(__dirname)).listen(port);

console.log('server started listening on port ', port, '...');