$( document ).on( 'submit', 'form', function(e) {
  e.preventDefault();
  var name = $('input').val();
  console.log( name );
  chrome.storage.local.set({username:name}, function() {
    console.log( 'Name gespeichert.' );
  });
  //localStorage.setItem( 'username', name );
});

$( document ).ready( function() {
  chrome.storage.local.get(['username'], function( data ) {
    $( '#ausgabe' ).html( 'Hallo '+data.username+'!' );
  })
});
