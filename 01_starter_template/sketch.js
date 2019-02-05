// this the variable for the ellipse size
let mySize = 150;

// this executes once at the beginning
function setup() {
	// create a canvas to draw on, make it the size of your browser window
	createCanvas(windowWidth, windowHeight);
}

// this executes 60 times a second
function draw() {
	background(0, 0, 255);
	noStroke();
	fill(255, 0, 0);
	ellipse(mouseX, mouseY, mySize, mySize);

	// you can log variables & more to see what they are in the console of your browser
	console.log(mySize);
}