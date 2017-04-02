var exec = require('child_process').exec;

var start = function(response){
	console.log("Request handler 'start' was called.");

	var body ='<html>' +
'<head>' +
'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>' +
'</head>' +
'<body>' +
'<form action="/upload" method="post">' +
'<textarea name="text" rows = "20" cols="60"></textarea>' +
'<input type="submit" value="Submit text"/>' +
'</form>' +
'</body>' +
'</html>' ;
		
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(body);
	response.end();
}

var upload = function(response){
	console.log("Request handle 'upload' was called.");
	response.writeHead(200, {"Content-Type":"text/plain"});
	response.write("Hello upload handle");
	response.end();
}

exports.start = start;
exports.upload = upload;
