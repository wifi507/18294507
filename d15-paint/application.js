$(document).ready(function() {
	colorbtns();
	sizebuttons();
	createcanvas();
});

colorbtns = function() {
	$('a[data-color]').each( function() {
		$(this).css({background: $(this).attr('data-color')});
	});
}


createcanvas = function() {
	$('#canvaswrapper').html('').append( $('<canvas width="'+$(window).width()+'" height="'+($(window).height()-32)+'" id="can"></canvas>' ) );
  var ctx = $( '#can' )[0].getContext( '2d' );
  ctx.fillStyle='#fff';
  ctx.fillRect(0,0,$(window).width(),$(window).height());
}
$(window).on( 'resize', createcanvas );


sizebuttons = function() {
	$( 'a[data-btn=save]' ).css({width:'auto'});

	var w = $(window).width();
	var h = $(window).height();

	var b_clear = $( 'a[data-btn=clear]' ).width()+12;
	var b_save = $( 'a[data-btn=save]' ).width()+12;
  var b_save2 = $( 'a[data-btn=save2]' ).width()+12;

	var anz_colorbtn = $( 'a[data-btn=color]' ).length;

	var sizebtn = (w-b_clear-b_save-b_save2)/anz_colorbtn;
	sizebtn-=12;

	$( 'a[data-btn=color]' ).css({width:Math.floor(sizebtn)});
	$( 'a[data-btn=save]' ).css({width:  b_save-13 + (sizebtn - Math.floor(sizebtn))*anz_colorbtn  });

}
$(window).on( 'resize', sizebuttons );


window.activeColor = '';
$(document).on( 'click', 'a[data-btn=color]', function() {

	window.activeColor = $(this).attr( 'data-color' );
	resetactivebtn();
	$(this).css({ height:40, 'margin-top':-20});

});
resetactivebtn = function() {
	$('a[data-btn=color]').css({ height:20, 'margin-top':0});
}

clearcanvas = function() {
	resetactivebtn();
	window.activeColor = '';
	createcanvas();
}

$(document).on( 'click', 'a[data-btn=clear]', clearcanvas );


window.drawing = false;
window.px = false;
window.py = false;
window.dotsize = 10;
$(document).on( 'mousedown', '#can', function(e) { e.preventDefault(); window.drawing=true; draw(e); } );
$(document).on( 'mousemove', '#can', function(e) { e.preventDefault(); draw(e); } );
$(document).on( 'mouseup', '#can', function(e) { window.drawing = false; e.preventDefault();  } );
var draw = function(e) {
	if ( window.activeColor == '' || !window.drawing ) return false;
	var x = e.pageX;
	var y = e.pageY;
	sizedot(x,y);
	window.px = x;
	window.py = y;
	var ctx = $( '#can' )[0].getContext( '2d' );

	ctx.beginPath();
	ctx.fillStyle = window.activeColor;
	ctx.arc(x, y, window.dotsize, 0, 2*Math.PI);
	ctx.fill();
	//ctx.closePath();
}

$(document).on( 'click','#overlay', function() {
	$( '#overlay' ).hide();
});


sizedot = function(x,y) {
	var dist = Math.sqrt(Math.pow(x-window.px, 2)+Math.pow(y-window.py, 2)  )
	if( x && y &&  dist < 2 &&  window.dotsize<50 )  window.dotsize++;
	if ( !x || !y || dist > 10 ) window.dotsize = 10;

}

$( document ).on( 'click', 'a[data-btn=save],a[data-btn=save2]', function() {
	myFileHandler.createNewFileFromCanvas(  $( '#can' )[0], $(this).attr('data-btn') == 'save2' );
});
