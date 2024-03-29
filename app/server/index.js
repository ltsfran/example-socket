const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = 3002;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    console.log('message: ' + msg);
  });
});

http.listen(port, () => {
  console.log('Ready localhost on port: ' + port);
}); 