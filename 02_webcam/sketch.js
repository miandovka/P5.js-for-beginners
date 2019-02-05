// this is a variable, it's still "empty" yet
let capture;

function setup() {
	createCanvas(windowWidth, windowHeight);

	// we tell the variable to capture a video
	capture = createCapture(VIDEO);
	// we tell the video which resolution it should have
  capture.size(320, 240);
}

function draw() {
	// we draw the video as image an tell it position and size
	image(capture, 0, 0, width, height);
	
	capture.loadPixels();  
}