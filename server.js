var sys = require('sys'),
    http = require('http'),
    ua = require('user-agent');

var server = http.createServer(function(req,res){
	var ua_obj = ua.parse(req.headers['user-agent']);
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end(ua_obj.fullName);
});
server.listen(8080,"127.0.0.1");
console.log('Server running at http://127.0.0.1:8080/');

