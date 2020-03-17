(function() {
  var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

//event listener
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);

function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 68: //d
      keyD = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 65: //a
      keyA = true;
      break;
    case 87: //w
      keyW = true;
      break;
  }
}

function onKeyUp(event) {
  var keyCode = event.keyCode;

  switch (keyCode) {
    case 68: //d
      keyD = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 65: //a
      keyA = false;
      break;
    case 87: //w
      keyW = false;
      break;
  }
}

//neccessary variables
var tickX = 100;
var tickY = 100;

var keyW = false;
var keyA = false;
var keyS = false;
var keyD = false;

//main animation function
function drawStuff() {
  window.requestAnimationFrame(drawStuff);
  var canvas = document.getElementById("myCanvas");
  var c = canvas.getContext("2d");

  c.clearRect(0, 0, 1200,1200);
  c.fillstyle = "blue";
  c.fillRect(tickX, tickY, 80, 80);

  if (keyD == true) {
    tickX += 3;
  }
  if (keyS == true) {
    tickY += 3;
  }
  if (keyA == true) {
    tickX -= 3;
  }
  if (keyW == true) {
    tickY -= 3;
  }
}
window.requestAnimationFrame(drawStuff);
