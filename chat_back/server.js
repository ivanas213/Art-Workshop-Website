var app = require('express')();
var http = require('http').createServer(app);
//app.use(require('cors')())

var io = require("socket.io")(http, {
  cors: {
    origin: "http://localhost:4200",
    //methods: ["GET", "POST"],
    //allowedHeaders: ["my-custom-header"],
    //credentials: true
  }
});

app.get('/', (req, res) => res.send('hello!'));

io.sockets.on('connection', (socket) => {
    room=""
    console.log('a user connected');
    socket.on('join', function (data) {
        socket.join(data.room); // We are using room of socket io
        console.log(room+"room")
    });
    socket.on('message', (msg) => {
        console.log(msg);
        room=msg.room
        io.to(room).emit('msg', msg.message);
       // io.sockets.in('user1@example.com').emit('msg', {msg: 'hello'});

        //io.sockets.in('user1@example.com').emit('new_msg', {msg: 'hello'});

    });
    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
      delete(socket)
    });
});
//io.in('user1@example.com').emit('new_msg', {msg: 'hello'});

http.listen(3000, () => {
    console.log('listening on *:3000');
});
