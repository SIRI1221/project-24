
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    
	ground = new Ground(400,height,800,20)
    stone1 = new stone(700,320,70,70);
    stone2 = new  stone(520,120,70,70);
    hammer = new  hammer (410,150,50,50);
    rectangle = new rectangle(410,60,300,PI/2);

}
	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  



function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ground.display();

    stone1.display();
    stone2.display();
    hammer.display();
    rectamgle.display();
 
}



