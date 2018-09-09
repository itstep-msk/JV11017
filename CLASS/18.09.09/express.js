var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var form = `
	<form action="/data" method="POST">
		<input name="fruit">
		<input type="submit">
	</form>
`;

app.use(bodyParser.urlencoded());

app.listen(7777);

app.get("/hello", function(request, response) {
	response.send(form);
})

app.post("/data", function(request, response) {
	console.log(request.body)
	response.send();
})