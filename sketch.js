
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,paper1;
var groundObject;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paper1 = new paper(200,450,40);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 

  dustbinObj.display();
  paper1.display();
  groundObject.display();

}

function keyPressed() { 
	if (keyCode === UP_ARROW) { 
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85}); } 
}
