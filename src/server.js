var http = require('http');
var url = require('url');
var portNum = 4888;

var start = function(route, handle){
	var onRequest = function(request, response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received");
		route(handle, pathname);
	}

	http.createServer(onRequest).listen(portNum);
	console.log("Server started at " + portNum);
}

exports.start = start;
