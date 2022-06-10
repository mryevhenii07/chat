const express = require("express");
// const seSocket = require('socket.io');

const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const PORT = 7777;
const rooms = new Map();

app.get("/rooms", (rej, res) => {
  res.json(rooms);
});

io.on("connection", (socket) => {
  console.log("socket connection ", socket.id);
});

http.listen(PORT, () => {
  console.log("server start");
});
