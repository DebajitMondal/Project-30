const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var Block1,Block2,Block3,Block4,Block5,Block6,Block7,Block8,Block9,Block10,Block11,Block12,Block13,Block14,Block15,Block16
var Ground1,Ground2;
var polygon;
var slingshot;



function preload() {

}

function setup(){
    var canvas = createCanvas(800,500);
    engine = Engine.create();
    world = engine.world;
    Ground1 = new Ground(500,255,300,20)
    Ground2 = new Ground(400,490,900,20)
    Block1 = new Box(440,235,30,40)
    Block2 = new Box(470,235,30,40)
    Block3 = new Box(500,235,30,40)
    Block4 = new Box(530,235,30,40)
    Block5 = new Box(560,235,30,40)

    Block6 = new Box(470,195,30,40)
    Block7 = new Box(500,195,30,40)
    Block8 = new Box(530,195,30,40)

    Block9 = new Box(500,155,30,40)
    polygon  = new Ball(50,200)
    slingshot = new SlingShot(polygon.body,{x:100, y:200});
    

}

function draw(){
    background("SaddleBrown");
    Engine.update(engine);
    Ground1.display()
    Ground2.display()
    Block1.display()
    Block2.display()
    Block3.display()
    Block4.display()
    Block5.display()
    Block6.display()
    Block7.display()
    Block8.display()
    Block9.display()
    polygon.display()





}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.Attach(polygon.body)
        
    }
    
    
    }
    