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
  let plys = [];
  plys[0] = coins;
  plys[1] = mana;
  plys[2] = patroni;
  plys[3] = hp;
  plys[4] = boostX;
  plys[5] = boostY;
localStorage.setItem("plys", JSON.stringify(plys));
}

var bulletf;
var  hp = ply[3];
var  mana = ply[1];
var  x = 100;
var  y = 400;
var  up = false;
var  col = false;
var  right = false;
var  patroni = ply[2];
var  down = false;
var  enter = false;
var  load = 0;
var  coinY = 300;
var  playerW = 40;
var  coins =  ply[0];
var  boostX = ply[4];
var  boostY = ply[5];
var  moveM = 0.2;
var  left = false;
var zar = 1;
var mobHP = 100;
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}
var mobG = getRandom(0, 3);
var mobI = Math.round(mobG);
function newMOB(){
mobG = getRandom(1, 3);
mobI = Math.round(mobG);
}

var enemy = "none";
var enemyS = 1;
var enemyX = 220;
var enemyY = 600;

var bulletWidth = 10;
var bulletHeight = 40;

var bulletX = x;
var bulletY = y;

const plr1 = new Image();

const bulletimg = new Image();

const mob = new Image();

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


const bullets = [];
class Bullet {
   constructor(){
      this.x = x + 15;
      this.y = y + 150;
      bullets.push(this);
   }
   draw(){
     if(bulletf == "up"){
      this.y = this.y - 35;
    } else if (bulletf == "down"){
      this.y = this.y + 35;
    } else if (bulletf == "left"){
      this.x = this.x - 13;
    } else if (bulletf == "right"){
      this.x = this.x + 13;
    }
      if(this.y < 0){
          bullets.splice(bullets.indexOf(this));
      }
      if(this.x < 0){
          bullets.splice(bullets.indexOf(this));
      }
      if(this.y > 1080){
          bullets.splice(bullets.indexOf(this));
      }
      if(this.x > 300){
          bullets.splice(bullets.indexOf(this));
      }
      // fillRect не требует openPath!
      ctx.drawImage(bulletimg,this.x,this.y,bulletWidth,bulletHeight);
      if (this.x + bulletWidth >= enemyX && this.x + bulletWidth <= enemyX + 50 && this.y + bulletHeight >= enemyY && this.y + bulletHeight <= enemyY + 200){
        mobHP = mobHP-30;
        bullets.splice(bullets.indexOf(this));
      }
   }
}


function drawGame(){
  fullScreen(html);
mana1 = Math.round(mana);


//      MOVE

  if (mana >= 0.2){
  if (up){
    y=y-(6.7 + boostY);
    mana = mana-moveM;
    plr1.src = "assets/images/pl/plr4.png";
    bulletf="up";
  }
  if (right){
    x=x+(1.1 + boostX);
    mana=mana-moveM;
    plr1.src = "assets/images/pl/plr3.png";
    bulletf="right";
  }
  if (down){
    y=y+(6.7 + boostY);
    mana=mana-moveM;
    plr1.src = "assets/images/pl/plr1.png";
    bulletf="down";
  }
  if (left){
    x=x-(1.1 + boostX);
    mana=mana-moveM;
    plr1.src = "assets/images/pl/plr2.png";
    bulletf="left";
  } } else {
    mana=0;
    plr1.src = "assets/images/pl/plr1.png";
    bulletf="down";
  }

//     SCENE

   ctx.drawImage(bg , 0 , 5, 300, 1200);//рисовка bg

   ctx.drawImage(panels , 30 , 900, 250, 300);//рисовка панелей
   ctx.drawImage(panels , 30 , -120, 250, 300);//рисовка панелей
   ctx.drawImage(mob,enemyX,enemyY,50,300); //per
   ctx.fillStyle = "red";//hp
   ctx.fillRect(enemyX,enemyY,mobHP/2,20);
   ctx.drawImage(plr1,x,y,playerW,300); //per

   ctx.font = "50px Arial";
   ctx.fillStyle = "yellow";
   ctx.fillText("MONEY: "+coins,5,630, 45);

   ctx.fillStyle = "red";//hp
   ctx.fillText("HP: "+hp,5,550, 45);//hp

   ctx.fillStyle = "blue";
   ctx.fillText("MANA: "+mana1,5,590, 45);


 // BULLETS

   ctx.fillStyle = "black";
   ctx.fillText("BULLETS: "+patroni,5,670, 45);

   bullets.forEach(bullet => bullet.draw());

   ctx.fillStyle = "grey";
   ctx.fillRect(100,50,zar*100,30);

   if(bulletf == "up"){
   bulletimg.src = "assets/images/dange/bullet1.png"; //panel
 } else if(bulletf =="down"){
   bulletimg.src = "assets/images/dange/bullet3.png"; //panel
 } else if(bulletf == "right"){
   bulletimg.src = "assets/images/dange/bullet4.png"; //panel
 } else if(bulletf == "left"){
   bulletimg.src = "assets/images/dange/bullet2.png";}

   if(enter) {
     if(patroni>=1){
       if(zar>=1){
   zar--;
   patroni--;
   new Bullet();
 }}}
if(zar<=1){
  zar = zar+0.03;
  ctx.fillStyle = "black"
  ctx.fillText("ПЕРЕЗАРЯДКА",130,70,50);
}

//      MOBS


if (enemyS == 1){
if (enemyX > x){
  enemyX = enemyX-0.5;
  if(mobI == 1){
    mob.src = "assets/images/dange/slime2.png"; //slime
  } else if(mobI == 2){
    mob.src = "assets/images/dange/zombie1.png"; //slime
  } else if(mobI == 3){
    mob.src = "assets/images/dange/shakal2.png"; //slime
  }
}
if(enemyX < x){
  enemyX = enemyX+0.5;
  if(mobI == 1){
    mob.src = "assets/images/dange/slime1.png"; //slime
  } else if(mobI == 2){
    mob.src = "assets/images/dange/zombie2.png"; //slime
  } else if(mobI == 3){
    mob.src = "assets/images/dange/shakal1.png"; //slime
  }
}

if (enemyY > y){
  enemyY = enemyY-2.5;
} else if(enemyY < y){
  enemyY = enemyY+2.5;
  }
}

if(mobHP < 1){
  enemyS = 0;
}

if(enemyS == 0){
   enemyX = 220;
   enemyY = 600;
   mobHP = 100;
   newMOB();
   enemyS = 1;
}

if(x + playerW >= enemyX && x + playerW <= enemyX + 50 && y + 100 >= enemyY && y + 200 <= enemyY + 200) {
  col = true;
} else {
  col = false;}

if(col){
  hp--;
}
//end
}

window.requestAnimationFrame(drawGame);
let game = setInterval(drawGame,25);//вызов функции каждые 100мс
