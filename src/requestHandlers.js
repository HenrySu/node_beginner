var querystring = require('querystring');
var fs = require('fs');
var formidable = require('formidable');

var start = function(response,request){
	console.log("Request handler 'start' was called.");

	var body ='<html>' +
'<head>' +
'<meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>' +
'</head>' +
'<body>' +
'<form action="/upload" enctype="multipart/form-data" method="post">' +
'<input type="file" name="upload" multiple="multiple"/>' +
'<input type="submit" value="Upload"/>' +
'</form>' +
'</body>' +
'</html>' ;
		
	response.writeHead(200, {"Content-Type":"text/html"});
	response.write(body);
	response.end();
}

var upload = function(response,request){
	console.log("Request handle 'upload' was called.");
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(request, function(error,fields,files){
		debugger;
		console.log("Parsing done");
		var fileDestPath = "/tmp/test.png";
		fs.rename(files.upload.path, fileDestPath, function(error){
			if(error){
				fs.unlink(fileDestPath);
				fs.rename(files.upload.path,fileDestPath);
			}
		});

	response.writeHead(200, {"Content-Type":"text/html"});
	response.write("received image : <br/>");
	response.write("<img src = '/show' />");
	response.end();
	});	
}

var show = function(response){
	console.log("Request handle 'show' is called.");
	response.writeHead(200, { "Content-Type":"image/png" });
	fs.createReadStream("/tmp/test.png").pipe(response);
}

exports.start = start;
exports.upload = upload;
exports.show = show;
