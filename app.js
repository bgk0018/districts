var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var port = 8080;

app.use(express.static(path.join(__dirname, "public")));

io.on('connection', function (socket) {

    socket.on('join-game', function (data) {

        console.log('player has joined the game!');

        socket.broadcast.emit('player-joined', {
            player: 'A player'
        });
    });

});


server.listen(port, function () {

    console.log('Listening on port ' + port);
});