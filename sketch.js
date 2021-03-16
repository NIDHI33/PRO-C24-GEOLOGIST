
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1;
var hammer;
var iron;
var ball;
var sand;
var sand1;
var sand2;
var sand3;
var sand4;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);
  

	engine = Engine.create();
	world = engine.world;
	var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);
	//Create the Bodies Here.
   
	ground = new Ground(200,height,2000,20);
	box1 = new Box(520,320,70,70);
	iron=new Iron(200,200);
  hammer=new Hammer(1000,200);
  sand = new Sand(300,300);
 // sand1 = new Sand(400,400);
 // sand2 = new Sand(500,500);
 // sand3 = new Sand(600,600);
 // sand4 = new Sand(550,550);
  sand1=new Sand(250,470);
  sand2=new Sand(270,470);
  sand3=new Sand(390,470);
  sand4=new Sand(400,470);
  
  rubber=new Rubber(700,370,20,10);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20, 20);
  Engine.update(engine);
  background("lightblue");

  ground.display();
  box1.display();
  iron.display();
  hammer.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  rubber.display();
  textSize(15).text("RUBBER",665,450);
  textSize(20).text("STONE",660,550);
  textSize(20).text("IRON",300,540);
  textSize(20).text("SAND",200,570);
  textSize(20).text("SAND",380,570);
  drawSprites();
 
}



