QUnit.test( 'Spezieller Pythagoras', function(assert) {

  assert.ok( typeof pyth_all == 'function', 'Funktion ist da' );

  var timer = Date.now();
  //var o = pyth_all();
  //var o = pyth_faster();
  var o = pyth_random();
  timer = Date.now() - timer;

  assert.ok( typeof o == 'object', 'o ist ein Objekt' );
  assert.ok( isFinite(o.a) && o.a > 0, 'a ganze Zahl und größer 0'  );
  assert.ok( isFinite(o.b) && o.b > 0, 'b ganze Zahl und größer 0'  );
  assert.ok( isFinite(o.c) && o.c > 0, 'c ganze Zahl und größer 0'  );

  assert.equal( o.a+o.b+o.c, 1000, 'a+b+c=1000' );
  assert.equal( Math.pow(o.a,2) + Math.pow(o.b,2), Math.pow(o.c,2), 'a²+b²=c²' );

  assert.ok( timer < 20, 'schneller als 20ms' );

  console.log( o );

});
