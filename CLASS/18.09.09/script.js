var http = require("http");
var os = require("os");

http.createServer(function(request, response) {
	response.setHeader("Content-Type", "text/html");
	response.end("<h2>Server it's</h2>");
	console.log("Пользователь подключился к серверу...");

	console.log(os.freemem());
	console.log(os.userInfo());
	console.log(request);
}).listen(7777, function() {
	console.log("Сервер создан...");
});