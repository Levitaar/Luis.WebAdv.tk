function setup() {
  createCanvas(1000,600);
}

function draw() {
 
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  noStroke();
  
  
  textSize(30);
  fill(255);
  text("I studied about the process of game development, and started learning", 60, 180);
  text("about the industry. I went to many camps to learn the ins and outs", 60, 240);
  text("of game design. It gave me a goal during my time in ", 60, 300);
  text("high school; and helped give my life direction during", 60, 360);
  text("the time after graduation when I fell into depresion", 60, 420);
  
}