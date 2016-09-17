function setup() {
  createCanvas(1000,600);
}

function draw() {
 
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  noStroke();
  
  
  textSize(30);
  fill(255);
  text("", 60, 60);
  text("", 60, 120);
  text("", 60, 180);
  text("", 60, 240);
  text("I still have a long way to go though. There are many aspects of me ", 60, 300);
  text("that I wish to improve. I find myself being lazy. I also have trouble", 60, 360);
  text("asking for help.", 60, 420);
  text("", 60, 480);
  text("", 60, 540);


  
}