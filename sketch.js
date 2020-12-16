const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1,bo2,box3,box4,box5,box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;
var box17;
var box18;
var box19;
var box20;

var stand1, stand2;

var b
 
var c

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,800);
    engine = Engine.create();
    world = engine.world;

    ground =new Ground(600,780,1200,40);
    box1= new Box(50,750,50,50);
    box2= new Box(50,700,50,50);
    box3= new Box(50,650,50,50);
    box4= new Box(50,600,50,50);
    box5= new Box(50,550,50,50);
    box6= new Box(100,750,50,50);
    box7= new Box(100,700,50,50);
    box8= new Box(100,650,50,50);
    box9= new Box(100,600,50,50);
   box10= new Box(100,550,50,50);
   box11= new Box(150,750,50,50);
   box12= new Box(150,700,50,50);
   box13= new Box(150,650,50,50);
   box14= new Box(150,600,50,50);
   box15= new Box(150,550,50,50);
   box16= new Box(200,750,50,50);
   box17= new Box(200,700,50,50);
   box18= new Box(200,650,50,50);
   box19= new Box(200,600,50,50);
   box20= new Box(200,550,50,50);
   box21= new Box(50,500,50,50);
   box22= new Box(50,450,50,50);
   box23= new Box(50,400,50,50);
   box24= new Box(50,350,50,50);
   box25= new Box(50,300,50,50);
   box26= new Box(100,500,50,50);
   box27= new Box(100,450,50,50);
   box28= new Box(100,400,50,50);
   box29= new Box(100,350,50,50);
   box30= new Box(100,300,50,50);
   box31= new Box(150,500,50,50);
   box32= new Box(150,450,50,50);
   box33= new Box(150,400,50,50);
   box34= new Box(150,350,50,50);
   box35= new Box(150,300,50,50);
   box36= new Box(200,500,50,50);
   box37= new Box(200,450,50,50);
   box38= new Box(200,400,50,50);
   box39= new Box(200,350,50,50);
   box40= new Box(200,300,50,50);
    
   stand1 = new Ground(800,500 , 30, 600)
   stand2 = new Ground(665,200,300,30)

   b = new Ball(500,750,50);

   c = new Chain(b.body,{x:525,y:212});
} 

function draw(){
  
        background("white");
    

    Engine.update(engine);

    ground.display();   
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    box27.display();
    box28.display();
    box29.display();
    box30.display();
    box31.display();
    box32.display();
    box33.display();
    box34.display();
    box35.display();
    box36.display();
    box37.display();
    box38.display();
    box39.display();
    box40.display();
    stand1.display();
    stand2.display();
    b.display();
    c.display();
}
function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(b.body,b.position, {x: -200 , y:-200 })
}
}