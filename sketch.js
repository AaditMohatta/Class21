var fixedRect,movingRect;




function setup() {
  createCanvas(1200,800);

 fixedRect= createSprite(600, 400, 50, 80);
 fixedRect.shapeColor="green";
 movingRect=createSprite(400,400,80,30);
movingRect.shapeColor="green";
fixedRect.velocityX=-2;
movingRect.velocityX=2;
}

function draw() {
  background(0);
bounceOff(movingRect,fixedRect);


  
  

drawSprites();
}

