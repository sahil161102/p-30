
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the BodiesHere.
	ball1 = new Ball(300,400);
	ball2 = new Ball(350,400);
	ball3 = new Ball(400,400);
	ball4 = new Ball(450,400);
	ball5 = new Ball(500,400);
    boundary = new Boundary(400,100,width,5);
	rope1 = new Rope(ball1.body,boundary.body,-100,0);
	rope2 = new Rope(ball2.body,boundary.body,-50,0);
	rope3 = new Rope(ball3.body,boundary.body,0,0);
	rope4 = new Rope(ball4.body,boundary.body,50,0);
	rope5 = new Rope(ball5.body,boundary.body,100,0);
	boundary = new Boundary(400,100,width,5);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  drawSprites();
  boundary.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

}
function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.applyForce(ball5.body,ball5.body.position,{x:500, y:0});
		console.log("sdds");
    }
}
