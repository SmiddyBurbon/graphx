var fileSaver = document.createElement('script');
fileSaver.src = 'js/FileSaver.js';
document.head.appendChild(fileSaver);

var toBlob = document.createElement('script');
toBlob.src = 'js/canvas-toBlob.js';
document.head.appendChild(toBlob);

function cloneCanvas() {
  var canvas = document.getElementById('canvas');
  var clone = canvas.cloneNode(true);

  var exportable = document.getElementById('exportable');
  var child = exportable.lastElementChild;
  while (child) {
      exportable.removeChild(child);
      child = exportable.lastElementChild;
  }
  exportable.appendChild(clone);

  clone.style.transform = 'scale(1)';
  clone.style.margin = "0";
}

function downloadImage(width, height) {
  cloneCanvas();
  var canvas = document.getElementById('exportable');

  html2canvas(canvas).then(function(canvas) {
      // updateStandings();
      canvas.id = "image";
      // document.body.appendChild(canvas);
      canvas.toBlob((blob) => {
        saveAs(blob, 'image.png')
      })
      // canvas.style.display = "none";
  });
}

/* Canvas Donwload */
function download(canvas, filename) {
  /// create an "off-screen" anchor tag
  var lnk = document.createElement('a'), e;

  /// the key here is to set the download attribute of the a tag
  lnk.download = filename;

  /// convert canvas content to data-uri for link. When download
  /// attribute is set the content pointed to by link will be
  /// pushed as "download" in HTML5 capable browsers
  lnk.href = canvas.toDataURL("image/png;base64");

  /// create a "fake" click-event to trigger the download
  if (document.createEvent) {
    e = document.createEvent("MouseEvents");
    e.initMouseEvent("click", true, true, window,
                     0, 0, 0, 0, 0, false, false, false,
                     false, 0, null);

    lnk.dispatchEvent(e);
  } else if (lnk.fireEvent) {
    lnk.fireEvent("onclick");
  }
}
