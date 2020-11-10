
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine,world;
var ball,ball2,ball3,ball4,ball5,ballsprite,ground;
var d1,d2,d3;
var rope1,rope2,rope3,rope4,rope5; 
var stand;
var b1,b2,b3,b4,b5,b6,b7,b8
var boundary;
var score = 0;
var bg ="download.jpg";
var backgroundImg


function preload(){
	getBackgroundImg();
}
function setup() {
	createCanvas(1700, 800 );


	engine = Engine.create();
	world = engine.world;
	
	var options2 = {
		isStatic:false


	}
	
	 
	
	//Create the Bodies Here.
	//ground = new box(400,650,800,5,options2);

	boundaryR = new stands(1400,800,40,1700);
	boundaryD = new stands(700,800,1700,40)

	ball = new Ball (200,200,250,PI*2);
	b1 = new box(880,435,30,40);
	b2 = new box(910,435,30,40);
	b3 = new box(940,435,30,40);
	b4 = new box(970,435,30,40);
	b5 = new box(1000,435,30,40);
	b6 = new box(1030,435,30,40);
	b7 = new box(1060,435,30,40)
	b8 = new box(910,395,30,40);
	b9 = new box(940,395,30,40);
	b10 = new box(970,395,30,40);
	b11 = new box(1000,395,30,40);
	b12 = new box(1030,395,30,40)
	b13 = new box(940,355,30,40)
	b14 = new box(970,355,30,40)
	b15 = new box(1000,355,30,40)
	b16 = new box(970,315,30,40)
	rope5 = new rope(ball.body,{x:300,y:300});
	stand = new stands(960,450,300,30);
	stand2 = new stands(960,700,300,30)
	b17 = new box(880,685,30,40);
	b18 = new box(910,685,30,40);
	b19 = new box(940,685,30,40);
	b20 = new box(970,685,30,40);
	b21 = new box(1000,685,30,40);
	b22 = new box(1030,685,30,40);
	b23 = new box(1060,685,30,40)
	b24 = new box(910,645,30,40);
	b25 = new box(940,645,30,40);
	b26 = new box(970,645,30,40);
	b27 = new box(1000,645,30,40);
	b28 = new box(1030,645,30,40)
	b29 = new box(940,605,30,40)
	b30 = new box(970,605,30,40)
	b31 = new box(1000,605,30,40)
	b32 = new box(970,565,30,40)


	
	
	Engine.run(engine);
  
}


function draw() {
if(backgroundImg)
  background(backgroundImg);
  rectMode(CENTER);
  
  textSize(25)
  text("Score - " + score, width-700, 50)
  
  
  ball.display();
  
  rope5.display();
  stand.display();
 

 
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  stand.display();
  boundaryR.display();
  boundaryD.display();
  stand2.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();
  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();
  b32.display();
   b1.display();
  b1.score();
  b2.score();
  b3.score();
  b4.score();
  b5.score();
  b6.score();
  b7.score();
  b8.score();
  b9.score();
  b10.score();
  b11.score();
  b12.score();
  b13.score();
  b14.score();
  b15.score();
  b16.score();
  b17.score();
  b18.score();
  b19.score();
  b20.score();
  b21.score();
  b22.score();
  b23.score();
  b24.score();
  b25.score();
  b26.score();
  b27.score();
  b28.score();
  b29.score();
  b30.score();
  b31.score();
  b32.score();

  

	//keyPressed();

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    rope5.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(ball.body,{x:200, y:200});
		rope5.attach(ball.body,{x:300,y:300});
	}
}



async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
        bg = ("download.jpg");
    }
    else{
        bg = ("night.jpg");
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}































