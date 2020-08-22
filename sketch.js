const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDorps=200 ,lightning
var lx,ly;
function preload(){
    lightning= loadImage("Images/Lightning.png")
   // lightning= loadImage("Images/.png")
}

function setup(){
    engine = Engine.create();
    world = engine.world;
    createCanvas(400,800)
    for (var i = 0; i <maxDorps;i++){
        createDrop(random(width),random(-height)+height)
    }
    umbrella = new Umbrella(170,500,150)
    Engine.run(engine);
      lx=random(50,350)
     ly=random(-100,1)
}

function draw(){

    background(0);
    if(frameCount%50<=10)
      lgt();
    drawDrops();
    reverseDrops();
    umbrella.display();
}   

function lgt(){
  image(lightning,lx, ly,150,300)
  if(frameCount%2 === 0){
    lx=random(50,350)
    ly=random(-100,1)
  }
} 

