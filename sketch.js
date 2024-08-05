function setup() {
  createCanvas(1000, 800);
  background("rgb(13,96,240)");
}

function draw() {
  
  
  fill("rgb(247,0,83)");
  stroke("black");
  if(mouseIsPressed)
  circle(mouseX,mouseY,20,40);

}
