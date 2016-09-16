function setup() {
  createCanvas(800,1000);
}

function draw() {
 
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  noStroke();
  
  
  textSize(30);
  fill(255);
  text("Hello World", 30, 30);
  
  
}