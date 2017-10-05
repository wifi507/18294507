$.fn.red = function() {
  return this.css({color:'red'});
  //return this; // transparente Methoden
  //return this.parent(); // destruktiv, weil jQuery aber was anderes als this
  //kein return => terminierend
  // return kein jQuery => terminierend
}

;(function($) {
$.fn.colorize = function( options ) {
  var settings = $.extend({
    r:0,
    g:0,
    b:0
  },options);
  return this.each( function() {
    if ( $(this).hasClass( 'nocolorize') == false ) {
      $(this).css({color:'rgb('+settings.r+','+settings.g+' ,'+settings.b+' )'})
    }
  } );
  //return this;
}
}(jQuery));
