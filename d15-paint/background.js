chrome.app.runtime.onLaunched.addListener(
  function( data ) {
      chrome.app.window.create(
        'projekt.html',
        {
          id:'fenster',
          bounds:{ width:800, height:600},
           resizable: false
        }
      );
  }
);
