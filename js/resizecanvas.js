function resizeCanvas(height, scale) {
  var canvas = document.getElementById('canvas');
  var preview = document.getElementById('preview');
  var factor = (preview.offsetWidth - 80) / canvas.offsetWidth;
  canvas.style.transform = 'scale(' + (factor * scale) + ')';

  canvas.style.marginBottom = ((height - (height * (factor * scale))) * -1) + 'px';
  canvas.style.marginLeft = 'auto';
  canvas.style.marginRight = 'auto';
}
