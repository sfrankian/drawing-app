var canvas = document.querySelector('#canvasArea');
var context = canvas.getContext('2d');
var colorPicker = document.getElementById('#colorPicker');

var mouse = {x: 0, y:0};
// Mouse event
canvas.addEventListener('mousemove', function(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

context.lineWidth = 5;
context.strokeStyle = 'blue';

canvas.addEventListener('mousedown', function(e) {
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
  }, false
);

canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mousemove', onPaint, false);
}, false);

var onPaint = function() {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
};
