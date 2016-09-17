function setup() {
  createCanvas(1000,600);
}

function draw() {
 
  fill(0);
  ellipse(mouseX, mouseY, 100, 100);
  noStroke();
  
  
  textSize(30);
  fill(255);
  text("My name is Luis Huiza", 60, 60);
  text("My biggest hobby is gaming", 60, 180);
  text("I enjoy games of all kinds, although videogames are my specialty", 60, 300);

  
  
}