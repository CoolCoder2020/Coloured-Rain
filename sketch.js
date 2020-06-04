  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;

  var engine, world;
  var red1,red2,red3,red4;
  var green1,green2,green3,green4;
  var blue1,blue2,blue3,blue4;
  var mg1,mg2,mg3,mg4;

  function setup() {
  var canvas = createCanvas(800,600);

  engine = Engine.create();
  world = engine.world;

  red1 = new Red(50,100,15,50);
  red2 = new Red(150,50,15,40);
  red3 = new Red(250,150,15,45);
  red4 = new Red(350,100,15,50);

  green1 = new Green(100,150,15,40);
  green2 = new Green(200,100,15,40);
  green3 = new Green(370,50,15,50);
  green4 = new Green(520,20,15,60);
  green5 = new Green(620,20,15,30);

  blue1 = new Blue(400,100,15,40);
  blue2 = new Blue(550,90,15,50);
  blue3 = new Blue(570,100,15,50);
  blue4 = new Blue(500,80,15,40);
  blue5 = new Blue(605,20,15,50);

  mg1 = new Magenta(125,150,15,40);
  mg2 = new Magenta(270,100,15,40);
  mg3 = new Magenta(600,50,15,50);
  mg4 = new Magenta(650,20,15,60);


}

  function draw() {
  background(0); 
  Engine.update(engine); 

  red1.display();
  red2.display();
  red3.display();
  red4.display();

  green1.display();
  green2.display();
  green3.display();
  green4.display();
  green5.display();
  
  blue1.display();
  blue2.display();
  blue3.display();
  blue4.display();
  blue5.display();

  mg1.display();
  mg2.display();
  mg3 .display();
  mg4.display();


  drawSprites();
}