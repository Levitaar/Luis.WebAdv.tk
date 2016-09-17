function setup() {
  createCanvas(800,1000);
}

function draw() {
 
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  noStroke();
  
  
  textSize(30);
  fill(255);
  text("Ever since I was little, Games were always important to", 30, 30);
  text("me. I remember I started playing since very young, and", 30, 60);
  text("I have kept at it ever since.", 30, 90);
  
  text("This hobby game me the motivation to move forward, as", 30, 150);
  text("well as teaching me many things in the process.", 30, 180);
}