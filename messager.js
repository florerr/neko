const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "*" }));

const server = http.createServer(app);
const io = new Server(server); // Initialize socket.io with the server

server.listen(50000, () => {
    console.log("Server running on port 50000");
});

// Example of a basic socket.io connection
io.on("connection", (socket) => {
    console.log("A user connected");

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});
