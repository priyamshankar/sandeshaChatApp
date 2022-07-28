const express = require("express");
const cors = require("cors");
require("./connections/dbconnect");
const userRoutes = require("./routes/userRoutes");
require("./connections/messageModel");
const socket = require("socket.io");
const messagesRoute = require("./routes/messagesRoute");

const app = express();
require("dotenv").config();

app.use(cors());
app.use(express.json());

app.use("/api/auth/", userRoutes);
app.use("/api/message/", messagesRoute);

//setting up the port
const server = app.listen(process.env.PORT, () => {
  console.log(`localhost connected on port ${process.env.PORT}`);
});

const io = socket(server, {
  cors: {
    origin: "http://localhost:3000",
    credentials: true,
  },
});

global.onlineUsers = new Map();
io.on("connection", (socket) => {
  global.chatSocket = socket;
  socket.on("add-user", (userId) => {
    onlineUsers.set(userId, socket.id);
  });

  socket.on("send-msg", (data) => {
    const sendUserSocket = onlineUsers.get(data.to);
    if (sendUserSocket) {
      socket.to(sendUserSocket).emit("msg-recieve", data.message);
    }
    console.log(data);
  });
});

// app.use(router);
