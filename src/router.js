var route = function (handle, pathname, response, postData){
	console.log("About to route a request for " + pathname);
	if(typeof(handle[pathname]) === 'function'){
		handle[pathname](response, postData);
	}
	else{
		console.log("404 not found, no request handler found for " + pathname);
	}
}

exports.route = route;
