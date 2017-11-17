console.log( 'Chat läuft...' );
var socket = require( 'socket.io' );
var express = require( 'express' );
var app = express();
var server = app.listen( 3001, function() {
  console.log( 'WIFI Secret Chat on Port 3001 running. Waiting for users.');
});

app.use( express.static( 'inc' ) );
app.get( '/', function(req,res){
  res.sendFile( __dirname+'/d13-chat.html' );
});

var io = socket( server ); // Websocket zwischen Client und Server herstellen
io.on( 'connection', function( socket ) {

  console.log( 'Neuer Benutzer ist da.' );
  socket.on( 'shout', function(data) {
    // data to database
    io.emit( 'servershout', data );
  });
});
