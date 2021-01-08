var rect1,rect2;
function setup() {
  createCanvas(1200,400);
  rect1=createSprite(500, 100, 50, 50);
  rect2=createSprite(500, 400, 100, 100);
rect1.shapeColor="green"
rect2.shapeColor="blue"
rect1.velocityY=5;
rect2.velocityY=-5;
}
function draw(){
background(0);
if(rect1.x-rect2.x<rect2.width/2+rect1.width/2 &&
    rect2.x-rect1.x <rect2.width/2+rect1.width/2 ){
        rect1.velocityX=rect1.velocityX*-1
        rect2.velocityX=rect2.velocityX*-1
    }
    if(rect1.y-rect2.y<rect2.height/2+rect1.height/2 &&
        rect2.y-rect1.y<rect2.height/2+rect1.height/2){
            rect1.velocityY=rect1.velocityY*-1
            rect2.velocityY=rect2.velocityY*-1  
        }
       drawSprites();

}