var myImage;

function preload() {
  myImage = loadImage("name.jpg");
}
function setup() {
  myImage.resize(800, 450);
  frameRate(24);
  createCanvas(myImage.width, myImage.height);
}

let startx = 200;
let starty = 200;
function draw() {
  //background(22);
  //image(myImage,0,0,width,height);

	for (var i = 0; i < 200; i++) {
  	let x = random(0,width);
  	let y = random(0,height);
 	 

  	stroke("purple");
  	//stroke(194,127,211);
  	//stroke("#c27fd3")
  	colorMode(HSB);
  	stroke(map(y,0,width,0,255),100,100);

  	strokeWeight(1);
      noStroke();
  	colorMode(RGB);
  	fill(myImage.get(x, y));
  	circle(x, y, 15);
  	//rect(x,y,20);
	}
textSize(200);
}
