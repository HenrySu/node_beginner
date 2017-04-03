var http = require('http');
var url = require('url');
var portNum = 4888;

var start = function(route, handle){
	var onRequest = function(request, response){
		var pathname = url.parse(request.url).pathname;
		var postData = "";
		console.log("Request for " + pathname + " received");
		route(handle, pathname, response, request);
	}

	http.createServer(onRequest).listen(portNum);
	console.log("Server started at " + portNum);
}

exports.start = start;
