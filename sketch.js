const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(1500, 690, 6000, 20);

  hero = new Hero(400,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  box1 = new Box(600, 650, 70, 70);
  box2 = new Box(600, 580, 70, 70);
  box3 = new Box(600, 510, 70, 70);
  box4 = new Box(600, 440, 70, 70);
  box5 = new Box(600, 370, 70, 70);
  box6 = new Box(600, 300, 70, 70);
  box7 = new Box(600, 230 , 70, 70);
  box8 = new Box(600, 160, 70, 70);
  box9 = new Box(600, 90, 70, 70);

  box1a = new Box(700, 650, 70, 70);
  box2b = new Box(700, 580, 70, 70);
  box3c = new Box(700, 510, 70, 70);
  box4d = new Box(700, 440, 70, 70);
  box5e = new Box(700, 370, 70, 70);
  box6f = new Box(700, 300, 70, 70);
  box7g = new Box(700, 230, 70, 70);
  box8h = new Box(700, 160, 70, 70);
  box9i = new Box(700, 90,  70, 70);

  boxA = new Box(800, 650, 70, 70);
  boxB = new Box(800, 580, 70, 70);
  boxC = new Box(800, 510, 70, 70);
  boxD = new Box(800, 440, 70, 70);
  boxE = new Box(800, 370, 70, 70);
  boxF = new Box(800, 300, 70, 70);
  boxG = new Box(800, 230, 70, 70);
  boxH = new Box(800, 160, 70, 70);
  boxI = new Box(800, 90,  70, 70);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  box1a.display();
  box2b.display();
  box3c.display();
  box4d.display()
  box5e.display();
  box6f.display();
  box7g.display();
  box8h.display();
  box9i.display();

  boxA.display();
  boxB.display();
  boxC.display();
  boxD.display()
  boxE.display();
  boxF.display();
  boxG.display();
  boxH.display();
  boxI.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){
Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

