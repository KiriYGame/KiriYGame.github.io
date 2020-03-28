var  hp = 100;
var  mana = 100;
var bullets = 0;
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

var ply = JSON.parse(localStorage.getItem("ply"));
var referrer = document.referrer;
if (referrer == "file:///C:/Users/пряник/Documents/GitHub/KiriYGame.github.io/dange.html" || referrer == "https://kiriygame.github.io/dange.html"){
  var  hp = ply[3];
  var  mana = ply[1];
  var  coins =  ply[0];
  var  boostX = ply[4];
  var  boostY = ply[5];
}

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


var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const coin = new Image();
coin.src = "assets/images/coin.png";

const shop2 = new Image();
shop2.src = "assets/images/shop2.png";

const arrow2 = new Image();
arrow2.src = "assets/images/arrow2.png";

const btc = new Image();
btc.src = "assets/images/btncoin.png";

const plr1 = new Image();

const shop = new Image();
shop.src = "assets/images/shop.png";

const bg = new Image();
bg.src = "assets/images/ground.png";//земля

const panels = new Image();
panels.src = "assets/images/btns.png"; //panel

const pl = new Image();
pl.src = "assets/images/pl1.png"; //panel

const arrow = new Image();
arrow.src = "assets/images/arrow.png"; //panel


function save(){
  let ply = [];
  ply[0] = coins;
  ply[1] = mana;
  ply[2] = bullets;
  ply[3] = hp;
  ply[4] = boostX;
  ply[5] = boostY;
localStorage.setItem("ply", JSON.stringify(ply));
}



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
}


function drawGame(){
save();
fullScreen(html);
mana1 = Math.round(mana);

  //   MOVE
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

       //draw

    ctx.drawImage(bg , 0 , 5);//рисовка bg

    ctx.drawImage(panels , 30 , 900, 250, 300);//рисовка панелей
    ctx.drawImage(panels , 30 , -120, 250, 300);//рисовка панелей


    ctx.font = "50px Arial"; //hp
    ctx.fillStyle = "red";//hp
    ctx.fillText("HP: "+hp,5,550, 45);//hp

    ctx.font = "50px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("MANA: "+mana1,5,590, 45);

    ctx.font = "50px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("MONEY: "+coins,5,630, 45);

    ctx.font = "50px Arial";
    ctx.fillStyle = "black";
    ctx.fillText("BULLETS: "+bullets,5,670, 45);

    if(coinRls == 1){
    ctx.drawImage(coin,coinX,coinY,30,200); //pers
  }

    ctx.drawImage(btc,btcX,btcY,30,200); //pers

    ctx.drawImage(shop,shopX,shopY,30,200); //pers

    ctx.drawImage(plr1,x,y,playerW,300); //pers

 if(coinRls == 1){
    if(x + playerW >= coinX && x + playerW <= coinX + coinW) {
 coinRls = 0;
 mana = mana + 50;
 coins++;
                                                             }
 }

 if(coins >= 1){
    if(col) {

      ctx.font = "50px Arial";
      ctx.fillStyle = "black";
      ctx.fillText("PRESS F",x,y, 45);

      if(f){
          shopbg = 1;
          coinRls = 1;
               }
}
}

 if(coinRls == 0) {
   if(btcol) {
     if(enter) {
       coinRls = coinRls + 1;
     }
   }
 }



if (shopbg == 1) {

  ctx.drawImage(shop2 , 55, 220, 200, 800);
  ctx.font = "60px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("Зелье маны (+200)          стоимость - 3",70,300, 170);
  ctx.fillText("Увеличение скорости        стоимость - 10",70,350, 170);
  ctx.fillText("Зелье здоровья (+50)       стоимость - 7",70,400, 170);
  ctx.fillText("Патроны (10 шт.)           стоимость - 15",70,450, 170);
  ctx.fillText("                   Выход ",90,900, 80);


 ctx.drawImage(arrow2, 200, 720, 40,300);

   if(chs == 1) {
   var chs1 = 200;
   ctx.drawImage(arrow,37,chs1,30,200); //pers
     if(enter & coins >= 3){
      mana = mana + 200;
      coins = coins - 3;
     }
 } else if(chs == 2){
   var chs1 = 250;
      ctx.drawImage(arrow,37,chs1,30,200); //pers
      if (enter & coins >= 10) {
        boostX = boostX + 0.4;
        boostY = boostY + 5;
        coins = coins - 10;
      }
 } else if(chs == 3){
   var chs1 = 300;
      ctx.drawImage(arrow,37,chs1,30,200); //pers
      if (enter & coins >= 7) {
        hp = hp + 50;
        coins = coins - 7;

      }}else if(chs == 4){
        var chs1 = 350;
           ctx.drawImage(arrow,37,chs1,30,200); //pers
     if (enter & coins >= 15) {
             bullets = bullets + 10;
             coins = coins - 15;

     }} else if(chs == 5) {
        var chs1 = 800;
        ctx.drawImage(arrow,107,chs1,30,200); //pers
    if (enter){
          shopbg = 0;
        }
    }
  else if(chs == 6){
   chs = 1;
 } else if(chs == 0){
   chs = 4;
 }}



if(x + playerW >= btcX && x + playerW <= btcX + 30) {
  btcol = true;
} else {
  btcol = false;}

if(x + playerW >= shopX && x + playerW <= shopX + shopW) {
  col = true;
} else {
  col = false;
}}


window.requestAnimationFrame(drawGame);
let game = setInterval(drawGame,25);//вызов функции каждые 100мс
