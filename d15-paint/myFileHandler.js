var myFileHandler = {
  writeFile:function(entry,data,callback) {
    entry.createWriter(function( writer ){
      writer.onwriteend = callback;
      writer.truncate( data.size );
      myFileHandler.waitForIO( writer, function() {
        writer.seek(0);
        writer.write(data);
      });
    });
  },
  waitForIO:function( writer, callback ) {
     var start = Date.now();
     // wait for a few seconds
     var reentrant = function() {
       if (writer.readyState===writer.WRITING && Date.now()-start<4000) {
         setTimeout(reentrant, 100);
         return;
       }
       if (writer.readyState===writer.WRITING) {
         console.error("Write operation taking too long, aborting!"+
           " (current writer readyState is "+writer.readyState+")");
         writer.abort();
       } else {
         callback();
       }
     };
     setTimeout(reentrant, 100);
  },
  dataURLtoBlob:function(dataURL) {
      var byteString = atob(dataURL.split(',')[1]);
      var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }
      var blob = new Blob([ab], { "type": mimeString });
      return blob;
  },
  createNewFileFromCanvas:function( canvasToSave, jpg ) {
    var blob = myFileHandler.dataURLtoBlob(canvasToSave.toDataURL( jpg ? 'image/jpeg' : 'image/png', jpg ? 0.1 : 1 )); // base64
    chrome.fileSystem.chooseEntry({
      type:'saveFile',
      suggestedName:'neu.'+(jpg?'jpg':'png'),
      accepts:[{description:(jpg?'JPG':'PNG'),extensions:[(jpg?'jpg':'png')]}]
    },function( writableEntry ){
      myFileHandler.writeFile(writableEntry,blob,function() { console.log( 'File gespeichert.'); });
    });


  }
};
// USAGE
// myFileHandler.createNewFileFromCanvas( HTMLCanvasObject );
