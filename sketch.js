
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5,Rope1,Rope2,Rope3,Rope4,Rope5,roof;
var bobDiameter;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bobObject1 = new Bob(100,500);
	bobObject2 = new Bob(200,500);
	bobObject3 = new Bob(300,500);
	bobObject4 = new Bob(400,500);
	bobObject5 = new Bob(500,500);

	roof = new Roof(250,200,600,30);
	Rope1 = new rope(bobObject1.body,roof.body,-bobDiameter*2,0);
	Rope2 = new rope(bobObject2.body,roof.body,-bobDiameter*2,0);
	Rope3 = new rope(bobObject3.body,roof.body,-bobDiameter*2,0);
	Rope4 = new rope(bobObject4.body,roof.body,-bobDiameter*2,0);
	Rope5 = new rope(bobObject5.body,roof.body,-bobDiameter*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  Rope1.diaplay();
  Rope2.diaplay();
  Rope3.diaplay();
  Rope4.diaplay();
  Rope5.diaplay();

  roof.display();
    
}



