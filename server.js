const express = require("express");
const app = express();
let http = require("http").Server(app);
let io = require("socket.io")(http);

app.use("/", express.static("dist"));

http.listen(8080, () => {
  console.log("Listening on port *: 8080");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
  // socket.emit("connections", Object.keys(io.sockets.connected).length);

  // socket.on("disconnect", () => {
  //   console.log("A user disconnected");
  // });

  // socket.on("chat-message", (data) => {
  //   socket.broadcast.emit("chat-message", data);
  // });

  // socket.on("typing", (data) => {
  //   socket.broadcast.emit("typing", data);
  // });

  // socket.on("stopTyping", () => {
  //   socket.broadcast.emit("stopTyping");
  // });

  // socket.on("joined", (data) => {
  //   console.log(data);
  //   socket.broadcast.emit("joined", data);
  // });

  // socket.on("leave", (data) => {
  //   socket.broadcast.emit("leave", data);
  // });
});
