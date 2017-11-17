var fs = require( 'fs' );
var cp = require( 'child_process' );

var serverFile = 'd14-error.js'; // chat.js

var server = cp.fork( serverFile );
console.log( 'Server Script gestartet.' );

fs.watchFile( serverFile, function(event, filename) {
  server.kill();
  console.log( 'Server Script beendet.' );
  server = cp.fork( serverFile );
  console.log( 'Server Script gestartet.' );
});
