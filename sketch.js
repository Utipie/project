var ball
var ball2
function setup() {
  createCanvas(1920,1080);
  ball = createSprite(400,400,10,10)
  ball2 = createSprite(200,200,10,10)
}

function draw() 
{
  background("lightblue");
  if(keyDown("W")){
    ball.y = ball.y - 2
  }
  if(keyDown("S")){
    ball.y = ball.y + 2
  }
  if(keyDown("A")){
    ball.x = ball.x - 2
  }
  if(keyDown("D")){
    ball.x = ball.x + 2
  }
  if(ball.isTouching(ball2)){
    ball2.shapeColor = "white"
  }
drawSprites();
}




