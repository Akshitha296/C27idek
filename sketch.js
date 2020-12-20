const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var b1

function setup() {
	createCanvas(600, 500);


	engine = Engine.create();
	world = engine.world;

	b1 = new Bob(100, 400, 40);
	b2 = new Bob(180, 400, 40);
	b3 = new Bob(260, 400, 40);
	b4 = new Bob(340, 400, 40);
	b5 = new Bob(420, 400, 40);
	b6 = new Bob(500, 400, 40);

	g = new ground(300, 100, 480, 30)
	//g = new ground(300, 440, 480, 30)

	rope1 = new cLog(b1.body, g.body, -200, 0)
	rope2 = new cLog(b2.body, g.body, -120, 0)
	rope3 = new cLog(b3.body, g.body, -40, 0)
	rope4 = new cLog(b4.body, g.body, +40, 0)
	rope5 = new cLog(b5.body, g.body, +120, 0)
	rope6 = new cLog(b6.body, g.body, +200, 0)

	Engine.run(engine);
}


function draw() {
  background(170, 178, 173);
  g.display(); 
  //g.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  rope6.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
}

function keyPressed(){ 
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-390}); 
	} 
}