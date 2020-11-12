
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var divisions =[];
var divisionHeight=300;
var plinkos = [];
var particles = [];
function preload()
{
	
}

function setup() {
	createCanvas(800, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height,width,20);
	for (var k = 0; k <=width; k = k + 80) {
		divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight));
	  }

	
	  for (var j = 75; j <=width; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,75));
	  }
  
	  for (var j = 50; j <=width-10; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,175));
	  }
  
	   for (var j = 75; j <=width; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,275));
	  }
  
	   for (var j = 50; j <=width-10; j=j+50) 
	  {
	  
		 plinkos.push(new Plinko(j,375));
	  }
  
	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(0);
  text ("Plinko -Sandhya ",10,10);
  if(frameCount % 60 ===0){
	particles.push(new Particle(random(width/2 - 30 ,width/2),10,10,10));
  }

  ground.display();
  for(i=0;i<divisions.length;i++){
	divisions[i].display();
  }
  for(i = 0 ; i<plinkos.length;i++){
	plinkos[i].display();
  }
  for(i = 0 ; i<particles.length;i++){
	particles[i].display();
  }
  
  drawSprites();
 
}



