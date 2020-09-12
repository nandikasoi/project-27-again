
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;

function setup() {
	createCanvas(800, 700);
	bob1 = new Bob1(50,50,55,55);
  roof = new roof(50,50,500,20);
  
  bob2 = new Bob2(150,50,55,55);
  bob3 = new Bob3(300,50,55,55);
  bob4 = new Bob4(450,50,55,55);
  bob5 = new Bob5(550,50,55,55);

	engine = Engine.create();
	world = engine.world;

    rope1 = new Rope1(bob1.body,roof.body,-bobDiameter*2,0);
    rope2 = new Rope2(bob1.body,roof.body,-bobDiameter*2,0);
    rope3 = new Rope3(bob1.body,roof.body,-bobDiameter*2,0);
    rope4 = new Rope4(bob1.body,roof.body,-bobDiameter*2,0);
    rope5 = new Rope5(bob1.body,roof.body,-bobDiameter*2,0);
  
    var options = {
        bodyA: bob.body,
        bodyB: roof.body,
        stiffness: 0.04,
        length: 10
    }
    var rope = Constraint.create(options);
    World.add(World,this.rope);
   
   
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();
 
}



