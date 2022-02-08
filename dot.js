function drawPoint(context, x, y, label, color, size) {
    if (color == null) {
      color = '#000';
  }
  if (size == null) {
      size = 5;
  }

    //REDONDEADO PARA DECIMALES
    var pointX = Math.round(x);
    var pointY = Math.round(y);

  context.beginPath();
  context.fillStyle = color;
  //DIBUJAR CIRCULO
  context.arc(pointX, pointY, size, 0, 2 * Math.PI);
  context.fill();

  //PONER TEXTO ENCIMA DEL PUNTO
    if (label) {
      var textX = pointX;
        var textY = Math.round(pointY - size - 3);
    
      context.font = 'Italic 14px Arial';
      context.fillStyle = color;
      context.textAlign = 'center';
      context.fillText(label, textX, textY);
  }
}

var canvas = document.getElementById('my-canvas');
var context = canvas.getContext('2d');

drawPoint(context, 20, 30, 'A', 'red', 1);
drawPoint(context, 30, 120, 'B', 'blue', 1.7);
drawPoint(context, 140, 70, 'C', 'orange', 5);
