var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,packageBody1,packageSprite1;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	packageSprite1=createSprite(width/2, 80, 10,10);
	packageSprite1.addImage(packageIMG)
	packageSprite1.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5, {restitution:0.7});
	Matter.Body.setStatic(packageBody, true);
	World.add(world, packageBody);
	
	packageBody1 = Bodies.circle(width/2 , 205 , 5, {restitution:0.7});
	Matter.Body.setStatic(packageBody1, true);
	World.add(world, packageBody1);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  packageSprite1.x= packageBody1.position.x 
  packageSprite1.y= packageBody1.position.y  
  drawSprites();
  keyPressed();
 
 
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	 console.log("down")
	 Matter.Body.setStatic(packageBody, false);
	 Matter.Body.setStatic(packageBody1, false);  
	
    }
  
}



