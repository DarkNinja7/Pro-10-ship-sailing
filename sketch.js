var sea,ship;
var seaImg,shipImg;

function preload(){
 ship_sailing = loadAnimation("ship-1.png","ship-2.png");
 seaImage = loadImage("sea.png");
}

function setup(){
  createCanvas(1500,1000);

  sea = createSprite(400,220,400,20);
  sea.addImage("sea",seaImage);
  sea.x=sea.width/2;


  ship = createSprite(300,500,100,50);
  ship.addAnimation("sailing",ship_sailing);
  ship.scale=0.5;
  ship.x=300;


  
}

function draw() {
  background("blue");
 
  sea.velocityX=-3;

  if(sea.x<0){
  sea.x=sea.width/2;

  }

  

 drawSprites();
  
}