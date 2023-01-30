// Server-side code
const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);

app.use(express.static(__dirname + "/html"));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/html/index.html");
});

server.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("send-message", (message) => {
        io.emit("receive-message", message);
    });

    socket.on("disconnect", () => {
        console.log("Client disconnected");
    });
});

