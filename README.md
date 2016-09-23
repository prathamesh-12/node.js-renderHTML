# node.js-renderHTML
render HTML files using fs : fileSystem inbuilt module


var http = require('http');       // require http module
var fs = require('fs');           // fs: fileSystem module is added to load the files

http.createServer(onRequest).listen(8000);

function onRequest(request, response) {
	response.writeHead(200, {'Content-type' : 'text/html'});     
	// <span style="color: blue">content-type changed to text/html as we load html file</span><br>
	
	
	fs.readFile('./index.html', null, function(errorResp, successResp) {   
	// <span style="color: blue">fs.readFile(path, optional options, callback) {} </span>
		if (errorResp) {
			response.writeHead(404);
			response.write("File Not Found");
		} else {
			response.write(successResp);
		}
		response.end(); // need to call this inside readFile as asyc way
	});
}

