var express = require( 'express' );
var app = express();
var fs = require( 'fs' );
var bp = require( 'body-parser' );

var server = app.listen( 3003, function() {
  console.log( 'Server läuft auf Port 3003.' );
});

app.use( function(req, res, next) {
  res.setHeader( 'Access-Control-Allow-Origin', '*' );
  res.setHeader( 'Access-Control-Allow-Methods', 'GET, POST' );
  next();
});

app.use( bp.urlencoded( {extended:true} ) ); // POST Daten geparst
app.use( express.static( 'inc' ) );

app.post( '/', function( req, res) {
  fs.readFile( 'errors.json', function(err, data) {
    if ( !err ) {
      var errors = JSON.parse( data );
      errors.errors.push( req.body.error );
      fs.writeFile( 'errors.json', JSON.stringify( errors ), function() {
        console.log( 'errors.json gespeichert.' );
        res.writeHead(200,{'Content-Type':'text/html'});
        res.end( 'Error gespeichert.' );
      });
    }
  });
});

app.get( '/', function( req, res) {
  res.sendFile( __dirname + '/errors.json' );
});
