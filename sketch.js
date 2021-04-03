const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var o1 
var engine,world

var ball

function setup() {
  createCanvas(400,400);

 engine = Engine.create()
 world = engine.world

 b1 = new Box(200,300,50,50)
 b2 = new Box(240,100,50,100)
 //b3 = new Box(150,100,50,50)
 g1 = new Ground(200,390,400,20)

 console.log(b1)

}

function draw() {
  background("black");  
  Engine.update(engine)
  
  b1.display()
  b2.display()
  //b3.display()
  g1.display()
}