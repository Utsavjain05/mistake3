const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var box3,box4,box5;
var pig1,log1;
var ground1;
var bird;
 var sling;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
bird=new bird();
    box1 = new Box(280,360,50,50);
    box2= new Box(360,360,20,20);
   // pig1= new pig(320,360,20,20);
   // log1= new log(280,310,80,PI/1);
    box3=new Box(280,300,50,50);
   ground1= new ground(200,380,400,10);
   sling= new slingshot(bird.body,{x:50,y:100});
 //  snake= new snake();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
   //pig1.display();
   log1.display();
   box3.display();
   ground1.display();
slingshot.display();
}


function mouseDragged(){
    // if (gameState!=="launched"){
         Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
     //}
 }
 
 
 function mouseReleased(){
     slingshot.fly();
     //gameState = "launched";
 }