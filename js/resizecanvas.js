function resizeCanvas(height) {
  var canvas = document.getElementById('canvas');
  var preview = document.getElementById('preview');
  var factor = (preview.offsetWidth - 80) / canvas.offsetWidth;
  canvas.style.transform = 'scale(' + factor + ')';

  canvas.style.marginBottom = ((height - (height * factor)) * -1) + 'px';
}
