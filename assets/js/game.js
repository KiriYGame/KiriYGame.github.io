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
panels.src = "assets/images/btns.png"; //panel

const pl = new Image();
pl.src = "assets/images/pl1.png"; //panel



    //   MOVE
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
  }}

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

  //   MOVE

  if (up){
    y=y-4;
  }
  if (right){
    x=x+1;
  }
  if (down){
    y=y+4;
  }
  if (left){
    x=x-1;
  }

     //draw

  ctx.drawImage(bg , 0 , 5);//рисовка bg

  ctx.font = "30px Arial"; //hp
  ctx.fillStyle = "red";//hp
  ctx.fillText("HP: "+hp,10,550, 40);//hp

  ctx.font = "30px Arial"; //hp
  ctx.fillStyle = "red";//hp
  ctx.fillText("ВОЛАН ДЕ МОРТ",x,y, 40);//hp
  
  ctx.drawImage(pl,x,y,40,150); //pers

  ctx.drawImage(panels , 30 , 900, 250, 300);//рисовка панелей
  ctx.drawImage(panels , 30 , -120, 250, 300);//рисовка панелей
}


window.requestAnimationFrame(drawGame);
let game = setInterval(drawGame,25);//вызов функции каждые 100мс
