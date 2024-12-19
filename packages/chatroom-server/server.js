import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000"
  }
});

io.on("connection", (socket) => {
  console.log(socket.id)

  socket.on("message", (message) => {
    console.log(message)

    // Broadcast the message to all connected clients
    socket.broadcast.emit("message", JSON.stringify({
      text: message,
      sender: socket.id
    }))
  })
});

httpServer.listen(4000);