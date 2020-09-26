var rectangle,rectangle2








function setup() {
  createCanvas(800,400);
  rectangle=createSprite(100,200,10,20);
  rectangle2=createSprite(300,100,10,10);
  rectangle.shapeColor="red";
  rectangle2.shapeColor="green";
}


function draw() {
  background(255,255,255);  
  
  rectangle2.x=mouseX;
  rectangle2.y=mouseY;
  
if(rectangle.x-rectangle2.x<rectangle.width/2+rectangle2.width/2 &&
  rectangle.x-rectangle.x<rectangle.width/2+rectangle2.width/2 && 
 rectangle.y-rectangle2.y<rectangle.height/2+rectangle2.height/2 &&
 rectangle2.y-rectangle.y<rectangle.height/2+rectangle2.height/2 ){
rectangle.shapeColor="yellow";
rectangle2.shapeColor="black";
}
else {

  rectangle.shapeColor="red";
  rectangle2.shapeColor="green";
}
  drawSprites();
}