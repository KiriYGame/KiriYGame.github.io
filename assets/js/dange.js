var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var  hp = 100;
var  mana = 101;
var  x = 100;
var  y = 400;
var  up = false;
var  chs = 1;
var  shopbg = 0;
var  col = false;
var  shopX = 220;
var  shopY = 600;
var  right = false;
var  down = false;
var  enter = false;
var  coinW = 40;
var  coinH = 15;
var  coinX = 50;
var  load = 0;
var  coinY = 300;
var  btcol = false;
var  btcX = 150;
var  btcY = 600;
var  playerW = 40;
var  coinRls = 1;
var  coins =  0;
var  boostX = 0;
var  boostY = 0;
var  shopW = 30;
var  moveM = 0.2;
var  left = false;

const plr1 = new Image();

const coin = new Image();
coin.src = "assets/images/coin.png";

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
if (e.keyCode === 13 /* a */){
enter = false
}
if (e.keyCode === 27 /* a */){
esc = false
}
if (e.keyCode === 70 /* a */){
f = false;
}

function draw(){
  ctx.font = "50px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("MONEY: "+coins,5,630, 45);
}
