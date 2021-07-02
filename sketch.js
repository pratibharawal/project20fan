
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var angle=60;
var angle2=240;
var angle3=310;
var poly;
var wedge;
var wall2


function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };

   
   var ops = {
     isStatic:  true
   };
  
  

  ground = Bodies.rectangle(300,590,600,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(320,10,10,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(310,10,10,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(300,10,10,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(280,10,10,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(270,10,10,ball_options);
  World.add(world,ball5);
  
  wedge = Bodies.rectangle(300,250,150,20,ops);
  World.add(world, wedge);

  wedge2 = Bodies.rectangle(300,250,150,20,ops);
  World.add(world, wedge2);

  wedge3 = Bodies.rectangle(300,250,150,20,ops);
  World.add(world, wedge3);

  wall = Bodies.rectangle(100,400,80,10,ground_options)
  World.add(world, wall); 
  
  wall2 = Bodies.rectangle(500,400,80,10,ground_options)
  World.add(world, wall2);  

  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  Matter.Body.rotate(wedge,angle);
  Matter.Body.rotate(wedge2,angle2 );
  Matter.Body.rotate(wedge3,angle3);
  push()
  translate(wedge.position.x,wedge.position.y)
  
  rotate(angle);

  rect(0,0,150,20);
  pop();
  angle += 0.1;

  push()
  
  translate(wedge2.position.x,wedge2.position.y)
  
  rotate(angle2);

  rect(0,0,150,20);
  pop();

  angle2 += 0.1;

  push()
  translate(wedge3.position.x,wedge3.position.y)
  
  rotate(angle3);

  rect(0,0,150,20);
  pop();
  angle3 += 0.1;

  ellipse(ball.position.x,ball.position.y,10);
  ellipse(ball2.position.x,ball.position.y,10);
  ellipse(ball3.position.x,ball.position.y,10);
  ellipse(ball4.position.x,ball.position.y,10);
  ellipse(ball5.position.x,ball.position.y,10);

  rect(ground.position.x,ground.position.y,600,20);

  rect(wall.position.x,wall.position.y,80,20);
  rect(wall2.position.x,wall2.position.y,80,20);




  
  
}

