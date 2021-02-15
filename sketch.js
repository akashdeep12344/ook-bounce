var fixedRect, movingRect,idkwhat;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  //movingRect.debug = true;
  idkwhat = createSprite(600, 100, 50, 100);
  idkwhat.shapeColor = "green";

  movingRect.velocityY = -5;
  fixedRect.velocityX = +5;
  idkwhat.velocityX = -5;

}

function draw() {
  background(0,0,0);  

  bounceoff(movingRect,fixedRect);
  bounceoff(idkwhat,fixedRect);
  bounceoff(movingRect,idkwhat);



  drawSprites();
}
