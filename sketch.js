var bgImg, bg;
var monkeyImg, monkey;
var money,  moneyImg;
var blockImg, block;
var score = 0;
var moneyGroup;
var strength = 300;
var fruit;



function preload(){

  bgImg = loadImage("./assets/Bg.jpg");
  monkeyImg = loadImage("./assets/monkey.png");
  moneyImg = loadImage("./assets/money.png");
  blockImg = loadImage("./assets/block.png");
  fruitImg = loadImage("./assets/mango.png");


}



function setup(){
createCanvas(windowWidth, windowHeight);

bg = createSprite(width/2, height/2, width, height);
bg.addImage(bgImg);
bg.scale = 1.5;

monkey = createSprite(600, 600, 20, 20);
monkey.addImage(monkeyImg);
monkey.scale = 0.5;
monkey.setCollider("rectangle", 0, 0, 300, 350);


moneyGroup = createGroup();
fruitGroup = createGroup();
blockGroup = createGroup();

}


function draw(){

  background("black");

  textSize(20);
  fill("white");
  text("score : "+ score, 50,80);

  fill("white");
  text("strength : " + strength, 50, 100);

  createBlocks();
  createCoins();
  createFruits();
  
  // if space key is pressed
  if(keyDown("SPACE")){

    monkey.velocityY =-10;
  }

   // if left key is pressed
   if(keyDown("LEFT_ARROW")){

    monkey.x = monkey.x -10;
   }

   // if right key is pressed
   if(keyDown("RIGHT_ARROW")){

    monkey.x = monkey.x +10;
   }

   strength -= 1;

   monkey.collide(moneyGroup, moneyCollide);

  

  //adding gravity
  monkey.velocityY = monkey.velocityY + 1.5;

  monkey.collide(blockGroup);

  drawSprites();

 // block.debug = true;
 // monkey.debug = true;
}

function createCoins(){

  if(frameCount % 150 === 0){

    money = createSprite(750, -10, 30, 20);
    money.addImage(moneyImg);
    money.scale = 0.09;

    money.x = Math.round(random(200, 1400));
    money.velocityY = 3.5;
    money.lieftime = 600;

    moneyGroup.add(money);

    //money.debug = true;

  }

}

function createBlocks(){
  
  if(frameCount % 100 === 0){

  block = createSprite(890, -10, 30, 20);
  block.addImage(blockImg);
  block.scale = 0.9;
  block.setCollider("rectangle", 0, 0, 220, 120);
 

  block.x = Math.round(random(200,1400));
  block.velocityY =3.5;
  block.lifetime = 500;

  blockGroup.add(block);
  }

}

function createFruits(){

  if(frameCount % 100 === 0){

    fruit = createSprite(800, -10, 30, 20);
    fruit.addImage(fruitImg);

    fruit.x = Math.round(random(200, 1300));
    fruit.velocityY = 3.5;
    fruit.lifetime = 500;
    fruit.shapeColor = "red";

    fruitGroup.add(fruit);

  }
}

function moneyCollide( monkey, money){

  money.remove();
  score += 1;

}