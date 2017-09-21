window.onload = function() {
  document.getElementById( 'absatz' ).innerHTML = 'Hallo <span id="wort">Javascript</span>!';
  document.getElementById( 'wort' ).onclick = function() {
    document.getElementById( 'wort' ).style.color = 'red';
  }
}
