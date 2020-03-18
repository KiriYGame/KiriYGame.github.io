var hp = 100;
var x = 10;
var y = 10;
var up = false,
    right = false,
    down = false,
    left = false;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const bg = new Image();
bg.src = "assets/images/ground.png";//земля

const panels = new Image();
panels.src = "assets/images/btns.png" //panels

document.addEventListener('keydown',press)
function press(e){
  if (e.keyCode === 87 /* w */){
    up = true
  }
  if (e.keyCode === 68 /* d */){
    right = true
  }
  if (e.keyCode === 83 /* s */){
    down = true
  }
  if (e.keyCode === 65 /* a */ ){
    left = true
  }
}
document.addEventListener('keyup',release)
function release(e){
  if (e.keyCode === 87 /* w */ ){
    up = false
  }
  if (e.keyCode === 68 /* d */){
    right = false
  }
  if (e.keyCode === 83 /* s */){
    down = false
  }
  if (e.keyCode === 65 /* a */){
    left = false
  }
}

function drawGame(){
  ctx.drawImage(bg , 0 , 0);//рисовка bg

  ctx.font = "30px Arial"; //hp
  ctx.fillStyle = "red";//hp
  ctx.fillText("HP: "+hp,10,550, 20);//hp

  ctx.fillStyle = "green"; //pers
  ctx.fillRect(x,y,15,50); //pers

  ctx.drawImage(panels , 30 , 420, 250, 300);//рисовка панелей
  ctx.drawImage(panels , 30 , -120, 250, 300);//рисовка панелей

  //   MOVE

  if (up){
    y=y-6;
  }
  if (right){
    x=x+2;
  }
  if (down){
    y=y+6;
  }
  if (left){
    x=x-2;
  }
}
window.requestAnimationFrame(drawGame);
let game = setInterval(drawGame,50);//вызов функции каждые 100мс
