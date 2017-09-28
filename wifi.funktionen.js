/*
©2017, WIFI Wien
*/
var e = function( idElement ) {
	return document.getElementById( idElement );
}

var zufallsZahl = function( von, bis ) {
	var number;
	number = Math.floor( Math.random() * (bis-von+1) ) + von;
	return number;
}
