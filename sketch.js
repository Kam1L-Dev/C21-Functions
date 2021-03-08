var fixedrect, movingrect, fixedrect1, fixedrect2;
function setup(){
  createCanvas(800,400)
fixedrect = createSprite(200,200,50,80);
movingrect = createSprite(400,200,100,30);
fixedrect1 = createSprite(200,100, 50, 50);
fixedrect2 = createSprite(300, 100, 50, 50);
fixedrect.shapeColor="red";
movingrect.shapeColor="red";
fixedrect2.shapeColor="cyan";
fixedrect1.shapeColor="cyan";
}
function draw(){
  background(0);
  movingrect.x = World.mouseX
  movingrect.y = World.mouseY
 
  if(isTouching(movingrect,fixedrect2)){
    fixedrect2.shapeColor="green";
    movingrect.shapeColor="green";
  }
    else{
      fixedrect2.shapeColor="red";
      movingrect.shapeColor="red"; 
    }
 

  drawSprites();
} 

