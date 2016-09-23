var http = require('http');
var fs = require('fs');

http.createServer(onRequest).listen(8000);

function onRequest(request, response) {
	response.writeHead(200, {'Content-type' : 'text/html'});
	fs.readFile('./index.html', null, function(errorResp, successResp) {
		if (errorResp) {
			response.writeHead(404);
			response.write("File Not Found");
		} else {
			response.write(successResp);
		}
		response.end(); // need to call this inside readFile as asyc way
	});
}

