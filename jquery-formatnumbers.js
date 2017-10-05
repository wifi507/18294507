;(function($) {
  $.fn.formatNumbers = function( options ) {
    var settings = $.extend({
      color:'red'
    },options);
    return this.each( function() {
      var i, s = '', h = $(this).html(), tag = false;
      for (i in h) {
        if ( h[i] == '<' ) tag = true;
        if ( h[i] == '>' ) tag = false;
        s += isFinite(h[i]*1) && h[i] != ' ' && !tag ? '<n>'+h[i]+'</n>' : h[i];
      }
      $(this).html(s);
      $('n', this).css({
        color:settings.color
      });
    });
  };
}(jQuery));
