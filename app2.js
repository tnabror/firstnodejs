var http = require('http');
var fs = require('fs');

var hostName = '127.0.0.1';
var port = '3000';

fs.readFile('index.html', (err, html) => {
	
	if(err){
		console.log(err);
	}

	var server = http.createServer( (req, res) => {
		res.statusCode = 200;
		res.setHeader = ('Content-type','text/plain');
		res.write(html);
		res.end();
	});

	server.listen( port, hostName, () => {
		console.log('server listening on ' + port);
	});
});

