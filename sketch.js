
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var enine,world,dustbin,paper;
var ground;
function setup() {
	createCanvas(1600, 700);
rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
dustbin=new Dustbin(1200,650);
paper=new Paper(200,450,40);
ground=new Ground(width/2,670,width,20);

Engine.run(engine);


}
  



function draw() {
  background("black");
	rectMode(CENTER);
  background(0);
  
dustbin.display();
paper.display();
ground.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
}

