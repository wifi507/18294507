document.write( '<script src="jquery-3.2.1.min.js"></script>' );

var add = function(a, b) {
  if ( typeof a == 'string' )
    a = a.replace( ',' , '.' );
  if ( typeof b == 'string' )
    b = b.replace( ',' , '.' );
  if ( isFinite(a) ) a *= 1;
  if ( isFinite(b) ) b *= 1;
  return a+b;
}

var create = function() {
  //var werte = arguments.sort();
  //console.log( arguments.length );
  /*if ( arguments.length == 0 ) {
    throw new Error('Error: keine Werte');
  }*/
  arguments = Array.prototype.sort.call( arguments );
  var o = {};
  //var indexe = 'abcde';
  for ( var i in arguments ) {
    //o[ indexe[i] ] = arguments[i];
    o[ String.fromCharCode( i*1+97 ) ] = arguments[i];
  }
  return o;

}

var outputSum = function(x,y) {
  $( '#ausgabe').html( add(x,y) );
}
