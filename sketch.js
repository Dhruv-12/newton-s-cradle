
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

	//Create the Bodies Here.
    ground = new Ground(350,100,600,100);
  bobObject1 = new Bob(150,550,100);
  bobObject2 = new Bob(250,550,100);
  bobObject3 = new Bob(350,550,100);
  bobObject4 = new Bob(450,550,100);
  bobObject5 = new Bob(550,550,100);

  rope1= new Rope(bobObject1.body, ground.body,150 ,100);
  rope2= new Rope(bobObject2.body, ground.body,250,100);
  rope3= new Rope(bobObject3.body, ground.body,350,100);
  rope4= new Rope(bobObject4.body, ground.body,450,100);
  rope5= new Rope(bobObject5.body, ground.body,550,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  ground.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}


