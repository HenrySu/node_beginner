var route = function (handle, pathname, response, request){
	console.log("About to route a request for " + pathname);
	if(typeof(handle[pathname]) === 'function'){
		handle[pathname](response,request);
	}
	else{
		console.log("404 not found, no request handler found for " + pathname);
		response.writeHead(404, {"Content-Type":"text/html"});
		response.write("404 Not Found");
		response.end();
	}
}

exports.route = route;
