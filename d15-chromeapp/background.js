chrome.app.runtime.onLaunched.addListener(
  function( data ) {
      chrome.app.window.create(
        'index.html',
        {
          id:'fenster',
          bounds:{ width:400, height:300}
        }
      );
  }
);
