var pyth_all = function() {
  var a, b, c, o = {}, i = 0;
  for (a = 1; a<= 1000; a++ ) {
   for (b = 1; b<= 1000; b++ ) {
     for (c = 1; c<= 1000; c++ ) {
       i++;
       if ( a+b+c == 1000 &&
        a*a+b*b == c*c ) {
          o.a = a;
          o.b = b;
          o.c = c;
      }
     }
   }
  }
  console.log( i );
  return o;
}

var pyth_faster = function() {
  var a, b, c, o = {}, i = 0;
  for (a = 1; a<= 1000; a++ ) {
   for (b = 1; b<= 1000; b++ ) {
     i++;
      c = 1000 - b - a;
       if ( a+b+c == 1000 &&
        a*a+b*b == c*c ) {
          o.a = a;
          o.b = b;
          o.c = c;
        console.log( i );
        return o;
     }
   }
  }
}

var pyth_random = function() {
  var a, b, c, o = {}, i=0;

  do {
    a = Math.floor( Math.random() * 1000 ) + 1;
    b = Math.floor( Math.random() * 1000 ) + 1;
    c = 1000 - b - a;
    i++;
  } while( a*a+b*b != c*c );

   o.a = a;
   o.b = b;
   o.c = c;
   console.log( i );
   return o;

}
