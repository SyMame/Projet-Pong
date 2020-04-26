var express = require("express");
var app = express();

let http = require('http').Server(app);

let io = require('socket.io')(http);

let path = require('path');

app.use(express.static('.'));



app.get('/', function(req, res){
    
res.sendFile(path.join(__dirname + '/pong.html'));

});

app.listen(3012,function(){
    console.log('HTTP server started on port 3012');
});
