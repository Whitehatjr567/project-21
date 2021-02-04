var wall,bullet1,bullet2,bullet3,divider1,divider2 ;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
  speed = random(55,90);
  weight = random(400,1500);
 
  bullet1 = createSprite(50,200,40,20);
  bullet1.shapeColor = "white";
  bullet3= createSprite(50,140,40,20);
  bullet3.shapeColor = "white";
  bullet2 = createSprite(50,260,40,20);
  bullet2.shapeColor = "white";
  wall = createSprite(1300,200,30,60);
  wall2 = createSprite(1300,120,30,60);
  wall3 = createSprite(1300,280,30,60);
  divider1 = createSprite(200,160,2300,10);
  divider1.shapeColor ="white";
  divider2 = createSprite(200,240,2300,10);
  divider2.shapeColor="white";
}

function draw() {
  background("black");  
  bullet1.velocityX = speed;
  if(wall.x - bullet1.x < wall.width/2 + bullet1.width/2){
  wall.shapeColor = "green";
  bullet1.velocityX = 0;
  bullet1.x = 1296;
  }
    
  bullet2.velocityX = speed;
  if(wall.x - bullet2.x < wall.width/2 + bullet2.width/2){
  wall2.shapeColor = "red";
  bullet2.velocityX = 0;
  bullet2.x = 1296;
  }
  
  bullet3.velocityX = speed;
  if(wall.x - bullet3.x < wall.width/2 + bullet3.width/2){
  wall3.shapeColor = "green";
  bullet3.velocityX = 0;
  bullet3.x = 1296;
  }
  drawSprites();
}