const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Mouse = Matter.Mouse;
const MouseConstraint = Matter.MouseConstraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15, ground;
var ball, rope
var mobConstraint;
function setup() {
  createCanvas(1000, 620);
  engine = Engine.create();
  world = engine.world;
  let canvasmouse = Mouse.create(canvas.elt);
    canvasmouse.pixelRatio = pixelDensity();
    let options = {
      mouse: canvasmouse
    };
    mobConstraint = MouseConstraint.create(engine, options);
    World.add(world, mobConstraint);

  ground = new Ground(600, 600, 1200, 20);
 
  box1 = new Box(500, 600, 70, 70);
  box2 = new Box(500, 530, 70, 70);
  box3 = new Box(500, 460, 70, 70);
  box4 = new Box(500, 390, 70, 70);
  box5 = new Box(500, 320, 70, 70);
  box6 = new Box(500, 250, 70, 70);
  box7 = new Box(400, 600, 70, 70);
  box8 = new Box(400, 530, 70, 70);
  box9 = new Box(400, 460, 70, 70);
  box10 = new Box(400, 390, 70, 70);
  box11 = new Box(400, 320, 70, 70);
  box12 = new Box(400, 250, 70, 70);
  box13 = new Box(300, 600, 70, 70);
  box14 = new Box(300, 530, 70, 70);
  box15 = new Box(300, 460, 70, 70);
 

  ball = new Ball(100,100);
  rope = new Rope(ball.body, { x: 300, y: 150 }); 

}

function draw() {
  background("pink");
  Engine.update(engine);
  ground.display();
    box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
   

  ball.display();
  rope.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


