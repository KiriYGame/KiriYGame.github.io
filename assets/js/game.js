var hp = 100;
var mana = 101;
var x = 100;
var y = 400;
var up = false,
    col = false;
    shopX = 220;
    shopY = 600;
    right = false,
    down = false,
    enter = false;
    coinW = 40,
    coinH = 15,
    coinX = 50,
    coinY = 300,
    playerW = 40,
    coinRls = 1,
    coins = 0;
    shopW = 30;
    moveM = 0.2,
    left = false;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const coin = new Image();
coin.src = "assets/images/coin.png";

const shop = new Image();
shop.src = "assets/images/shop.png";

const start = new Image();
start.src = "assets/images/forstart.png";

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
  }
  if (e.keyCode === 13 /* a */){
    enter = true
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
}




function drawGame(){

  //   MOVE
  if (mana >= 0.2){
  if (up){
    y=y-6;
    mana = mana-moveM;
    mana1 = Math.round(mana);
  }
  if (right){
    x=x+1;
    mana=mana-moveM;
    mana1 = Math.round(mana);
  }
  if (down){
    y=y+6;
    mana=mana-moveM;
    mana1 = Math.round(mana);
  }
  if (left){
    x=x-1;
    mana=mana-moveM;
    mana1 = Math.round(mana);
  } } else {
    mana=0;
  }

       //draw

    ctx.drawImage(bg , 0 , 5);//рисовка bg

    ctx.drawImage(panels , 30 , 900, 250, 300);//рисовка панелей
    ctx.drawImage(panels , 30 , -120, 250, 300);//рисовка панелей


           if (mana == 101){
             ctx.drawImage(start,0,0,300,1200);
           }

    ctx.font = "50px Arial"; //hp
    ctx.fillStyle = "red";//hp
    ctx.fillText("HP: "+hp,10,550, 45);//hp

    ctx.font = "50px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("MANA: "+mana1,10,590, 45);

    ctx.font = "50px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("MONEY: "+coins,10,630, 45);

    if(coinRls == 1){
    ctx.drawImage(coin,coinX,coinY,30,200); //pers
  }


    ctx.drawImage(shop,shopX,shopY,30,200); //pers


    ctx.drawImage(pl,x,y,playerW,150); //pers

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
      ctx.fillText("PRESS ENTER",x,y, 45);

      if(enter){

          coinRls = 1;
               }
}
}

if(x + playerW >= shopX && x + playerW <= shopX + shopW) {
  col = true;
} else {
  col = false;
}

}



window.requestAnimationFrame(drawGame);
let game = setInterval(drawGame,25);//вызов функции каждые 100мс
