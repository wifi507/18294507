var fs = require( 'fs' );
var cp = require( 'child_process' );

var serverFile = 'chat.js';

var server = cp.fork( serverFile );
console.log( 'Server Script gestartet.' );

fs.watchFile( serverFile, function(event, filename) {
  server.kill();
  console.log( 'Server Script beendet.' );
  server = cp.fork( serverFile );
  console.log( 'Server Script gestartet.' );
});
