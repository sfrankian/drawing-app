var canvas = document.querySelector('#canvasArea');
var context = canvas.getContext('2d');
var colorPicker = document.getElementById('#colorPicker');
var paintColor = '#000000';
var mouse = {x: 0, y:0};

// Color picker event listeners
colorPicker.addEventListener("input", updateFirst, false);
colorPicker.addEventListener("change", watchColorPicker, false);

function watchColorPicker(event) {
  context.strokeStyle = event.target.value;
}

function updateFirst(event) {
  context.strokeStyle = event.target.value;
}

// Mouse events
canvas.addEventListener('mousemove', function(e){
  mouse.x = e.pageX - this.offsetLeft;
  mouse.y = e.pageY - this.offsetTop;
}, false);

context.lineWidth = 5;
context.strokeStyle = paintColor;

canvas.addEventListener('mousedown', function(e) {
    context.beginPath();
    context.moveTo(mouse.x, mouse.y);

    canvas.addEventListener('mousemove', onPaint, false);
  }, false
);

canvas.addEventListener('mouseup', function() {
  canvas.removeEventListener('mousemove', onPaint, false);
}, false);

// Drawing to canvas
var onPaint = function() {
    context.lineTo(mouse.x, mouse.y);
    context.stroke();
};

// Saving canvas to image
function saveImage() {
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  window.location.href = image;
  alert("Image saved as png.");
}

// Deleting canvasArea
function deleteCanvas() {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

$('li').click(function () {
    var val = $(this).data('val');
    context.lineWidth = val;
});
