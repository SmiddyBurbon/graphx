function downloadImage(file) {

  html2canvas(document.querySelector("#canvas"), {
    allowTaint: true
  }).then(canvas => {
    // document.body.insertAdjacentHTML('beforeend', '<p id="hint">Right Click => Save</p>');
    // document.getElementById('canvas').style.display = "none";
    // document.body.appendChild(canvas);
    download(canvas, file + '.png');
    // document.getElementById('hint').scrollIntoView();
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
