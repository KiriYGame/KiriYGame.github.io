var hp = 100;
var mana = 101;
var x = 100;
var y = 400;
var up = false,
    chs = 1;
    shopbg = 0;
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
    boostX = 0;
    boostY = 0;
    shopW = 30;
    moveM = 0.2,
    left = false;

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

const coin = new Image();
coin.src = "assets/images/coin.png";

const shop2 = new Image();
shop2.src = "assets/images/shop2.png";

const arrow2 = new Image();
arrow2.src = "assets/images/arrow2.png";

const plr1 = new Image();

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

const arrow = new Image();
arrow.src = "assets/images/arrow.png"; //panel


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
}


function drawGame(){

  //   MOVE
  if (mana >= 0.2){
  if (up){
    y=y-(6.7 + boostY);
    mana = mana-moveM;
    mana1 = Math.round(mana);
    plr1.src = "assets/images/pl/plr4.png";
  }
  if (right){
    x=x+(1.1 + boostX);
    mana=mana-moveM;
    mana1 = Math.round(mana);
    plr1.src = "assets/images/pl/plr3.png";
  }
  if (down){
    y=y+(6.7 + boostY);
    mana=mana-moveM;
    mana1 = Math.round(mana);
    plr1.src = "assets/images/pl/plr1.png";
  }
  if (left){
    x=x-(1.1 + boostX);
    mana=mana-moveM;
    mana1 = Math.round(mana);
    plr1.src = "assets/images/pl/plr2.png";
  } } else {
    mana=0;
    plr1.src = "assets/images/pl/plr1.png";
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
    ctx.fillText("HP: "+hp,5,550, 45);//hp

    ctx.font = "50px Arial";
    ctx.fillStyle = "blue";
    ctx.fillText("MANA: "+mana1,5,590, 45);

    ctx.font = "50px Arial";
    ctx.fillStyle = "yellow";
    ctx.fillText("MONEY: "+coins,5,630, 45);

    ctx.drawImage(plr1,x,y,playerW,300); //pers

    if(coinRls == 1){
    ctx.drawImage(coin,coinX,coinY,30,200); //pers
  }


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

if (shopbg == 1) {
  ctx.drawImage(shop2 , 55, 220, 200, 800);
  ctx.font = "60px Arial";
  ctx.fillStyle = "yellow";
  ctx.fillText("Зелье маны (+200)          стоимость - 3",70,300, 170);
  ctx.fillText("Увеличение скорости        стоимость - 10",70,350, 170);
  ctx.fillText("Зелье здоровья (+50)       стоимость - 7",70,400, 170);
  ctx.fillText("                   Выход (Esc)",85,900, 80);


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
 } else if(chs == 3){
   var chs1 = 300;
      ctx.drawImage(arrow,37,chs1,30,200); //pers
 } else if(chs == 4){
   chs = 1;
 } else if(chs == 0){
   chs = 3;
 }

 if(esc) {
   shopbg = 0;
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
