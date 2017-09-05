const http = require('http');
const fs = require('fs');

const host = '127.0.0.1';
const port = '3000';

fs.readFile('index.html', (err, html) => {
	if(err){
		console.log(err);
	}


	const server = http.createServer( (req, res) => {
		res.statusCode = 200;
		res.setHeader = ('Content-type', 'tetx/plain');
		res.write(html);
		res.end();
	});

	server.listen(port, host, () => {
		console.log('server listen on port 3000');
	});
});



