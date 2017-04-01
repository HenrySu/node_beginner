var server = require('./server.js');
var router = require('./router.js');
var requestHandlers = require('./requestHandlers.js');

var handle = {
	"/":requestHandlers.start,
	"/start":requestHandlers.start,
	"/upload":requestHandlers.upload
};

server.start(router.route, handle);
