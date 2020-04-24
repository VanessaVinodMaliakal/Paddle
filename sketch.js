var ball,image,paddle,invisibleline;

function preload() {
  
  /* preload images of the ball and the paddle */
  
  ballImage= loadImage("ball.png");
  paddleImage= loadImage("paddle.png");
  
}

function setup() {
  
  createCanvas(400, 400);
  
   /* create the Ball Sprite and the Paddle Sprite */
  /* assign the images to the sprites */
  
  ball=createSprite(10,200,5,5);
  ball.addImage("ball",ballImage);
  ball.scale=0.8;
  
  paddle=createSprite(350,300,5,5);
  paddle.addImage("paddle",paddleImage);
  
  invisibleLine=createSprite(350,300,10,88)
  invisibleLine.visible=false;
  
    /* give the ball an initial velocity of 9 in the X direction */
  
  ball.velocityX=7;

 }

function draw() {
  
  background("lightyellow");
  
  /* create Edge Sprites here */
  
  edges = createEdgeSprites();
 
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  /* Allow the ball to bounceoff from the paddle */
  
   if (ball.bounceOff(paddle)) {
       randomVelocity();
}
  
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  paddle.bounceOff(edges[3]);
  paddle.bounceOff(edges[2]);
  
  
  if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
    paddle.y=paddle.y-20;
   }
  
  if(keyDown(DOWN_ARROW))
  {
    /* what should happen when you press the UP Arrow Key */
      paddle.y=paddle.y+20;
  }

 //invisibleLine.velocityY=paddle.velocityY; 
 //invisibleLine.y=paddle.y 
  
  if(ball.x>400){
    ball.x=0;
    ball.y=random(50,200);
    ball.velocityX=5;
  }
  
 drawSprites();
  
}

function randomVelocity()
{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
  
  ball.velocityX=ball.velocityX-7;
  ball.setSpeed(ball.velocityX,random(10,45));
  
}

