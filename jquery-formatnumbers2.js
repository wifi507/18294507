;(function($) {
  var globaleVarFuerPlugin;
  $.fn.formatNumbers = function( options ) {
    var settings = $.extend({
      color:'red'
    },options);
    return this.each( function() {

      var i, inhalt = $(this).html(), neuerInhalt = '';
      for ( i in inhalt ) {
        neuerInhalt += isFinite( inhalt[i] ) ? '<span style="color:red;">'+inhalt[i]+'</span>' : inhalt[i];
      }



      $(this).html( neuerInhalt );

    });
  };
}(jQuery));
