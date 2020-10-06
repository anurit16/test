var knife , knifeImage ;
var PLAY = 1;
var END = 0;
var gameState = 1;
var fruit,fruit1,fruit2,fruit3,fruit4;
var monsterImage;
var gameOver , gameOverImage;
var fruitGroup,enemyGroup;
var score;

function preload(){
knifeImage = loadImage("sword.png");
 fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  
monsterImage = loadAnimation("alien1.png","alien2.png");
  gameOverImage = loadImage("gameover.png");
}

function setup(){
   createCanvas(600, 600);

   knife = createSprite(40,200,20,20);
  knife.addImage(knifeImage);
  knife.scale= 0.7;
       knife.setCollider("circle",0,0,40);
  knife.debug = true;
  
  
  fruitGroup = createGroup();
enemyGroup = createGroup();
  
  score = 0;
}

function draw(){
   background("green");
  
text("Score: " +score,300,50 );  
  
   knife.y = mouseY;
  knife.x = mouseX;
  
  
  if(gameState === PLAY){
      
    if(fruitGroup.isTouching(knife)){
         fruitGroup.destroyEach();
    score=score+2;
  }
  
  
  // decrease score if knife touching enemyGroup//
    if(enemyGroup.isTouching(monster)){
    enemyGroup.destroyEach();
    score=score-1;
  }
    fruits();
  Enemy();
  }
  if (gameState === END) {
    knife.addImage(gameOverImage);
    knife.x = 200;
    knife.y = 200;
  }
  
  drawSprites()
}

function fruits(){
  if(frameCount%80===0){
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    //fruit.debug = true;
    r = Math.round(random(1,4));
    if (r == 1){
      fruit.addImage(fruit1);
    }
    else if(r == 2){
      fruit.addImage(fruit2)
    } 
    else if(r == 3){
      fruit.addImage(fruit3);
    }
      else if(r == 4){
        fruit.addImage(fruit4);
      }
    fruit.y = Math.round(random(50,340));
    fruit.velocityX = -7;
    fruit.setLifetime = 100;
    fruitGroup.add(fruit);
    }
    }

function Enemy(){
  if(frameCount%20===0){
    var monster = createSprite(400,200,20,20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(100,300))
    monster.velocityX = -8;
   // monster.lifetime = 100;
    enemyGroup.add(monster);
    
     //assign lifetime to the variable
    monster.lifetime = 75;
    
    //adjust the depth
    monster.depth = knife.depth;
    knife.depth = knife.depth + 1;
    
  }
}


