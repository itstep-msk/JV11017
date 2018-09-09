var io = require("socket.io")(7777);

io.on("connection", function(client) {
	client.on("clientEvent", function(data) {
		io.emit("serverEvent",data);
	})
})