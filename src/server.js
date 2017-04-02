var http = require('http');
var url = require('url');
var portNum = 4888;

var start = function(route, handle){
	var onRequest = function(request, response){
		var pathname = url.parse(request.url).pathname;
		var postData = "";
		console.log("Request for " + pathname + " received");
		request.setEncoding('utf8');
		request.addListener("data", function(postDataChunk){
			postData += postDataChunk;
			console.log("Received POST data chunk '" + postDataChunk + "'.");
		});

		request.addListener("end", function(){
			route(handle, pathname,response, postData);
		});

	}

	http.createServer(onRequest).listen(portNum);
	console.log("Server started at " + portNum);
}

exports.start = start;
