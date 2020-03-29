var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ply = JSON.parse(localStorage.getItem("ply"));

var html = document.documentElement;

function fullScreen(element) {
  if(element.requestFullscreen) {
    element.requestFullscreen();
  } else if(element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if(element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
}

function save(){
  ply[0] = coins;
  ply[1] = mana;
  ply[2] = bullets;
  ply[3] = hp;
  ply[4] = boostX;
  ply[5] = boostY;
localStorage.setItem("plys", JSON.stringify(plys));
}

var  hp = ply[3];
var  mana = ply[1];
var  x = 100;
var  y = 400;
var  up = false;
var  chs = 1;
var  shopbg = 0;
var  col = false;
var  right = false;
var  down = false;
var  enter = false;
var  load = 0;
var  coinY = 300;
var  btcol = false;
var  playerW = 40;
var  coins =  ply[0];
var  boostX = ply[4];
var  boostY = ply[5];
var  moveM = 0.2;
var  left = false;

const plr1 = new Image();

const coin = new Image();
coin.src = "assets/images/coin.png";

const bg = new Image();
bg.src = "assets/images/ground2.jpg";//земля

const panels = new Image();
panels.src = "assets/images/btns.png"; //panel

const pl = new Image();
pl.src = "assets/images/pl1.png"; //panel

//   MOVE
document.addEventListener('keydown',press)
function press(e){
if (e.keyCode === 87 /* w */){
up = true;
}
if (e.keyCode === 68 /* d */){
right = true;
}
if (e.keyCode === 83 /* s */){
down = true;
}
if (e.keyCode === 65 /* a */ ){
left = true;
}
if (e.keyCode === 13 /* a */){
enter = true;
}
if (e.keyCode === 27 /* a */){
esc = true;
}
if (e.keyCode === 38 /* a */){
chs--;
}
if (e.keyCode === 40 /* a */){
chs++;
}
if (e.keyCode === 70 /* a */){
f = true;
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
if (e.keyCode === 13 /* a */){
enter = false
}
if (e.keyCode === 27 /* a */){
esc = false
}
if (e.keyCode === 70 /* a */){
f = false;
}}

function draw(){
  fullScreen(html);
mana1 = Math.round(mana);

  if (mana >= 0.2){
  if (up){
    y=y-(6.7 + boostY);
    mana = mana-moveM;
    plr1.src = "assets/images/pl/plr4.png";
  }
  if (right){
    x=x+(1.1 + boostX);
    mana=mana-moveM;
    plr1.src = "assets/images/pl/plr3.png";
  }
  if (down){
    y=y+(6.7 + boostY);
    mana=mana-moveM;
    plr1.src = "assets/images/pl/plr1.png";
  }
  if (left){
    x=x-(1.1 + boostX);
    mana=mana-moveM;
    plr1.src = "assets/images/pl/plr2.png";
  } } else {
    mana=0;
    plr1.src = "assets/images/pl/plr1.png";
  }


   ctx.drawImage(bg , 0 , 5, 300, 1200);//рисовка bg

   ctx.drawImage(panels , 30 , 900, 250, 300);//рисовка панелей
   ctx.drawImage(panels , 30 , -120, 250, 300);//рисовка панелей
   ctx.drawImage(plr1,x,y,playerW,300); //pers

   ctx.font = "50px Arial";
   ctx.fillStyle = "yellow";
   ctx.fillText("MONEY: "+coins,5,630, 45);

   ctx.font = "50px Arial"; //hp
   ctx.fillStyle = "red";//hp
   ctx.fillText("HP: "+hp,5,550, 45);//hp

   ctx.font = "50px Arial";
   ctx.fillStyle = "blue";
   ctx.fillText("MANA: "+mana1,5,590, 45);

   ctx.font = "50px Arial";
   ctx.fillStyle = "black";
   ctx.fillText("BULLETS: "+bullets,5,670, 45);
}

window.requestAnimationFrame(draw);
let game = setInterval(draw,25);//вызов функции каждые 100мс
