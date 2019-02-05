let video;
let vScale = 16;

function setup() {
	createCanvas(windowWidth, windowHeight);
	pixelDensity(1);
	video = createCapture(VIDEO);
	video.size(width/vScale, height/vScale);
}

function draw() {
	video.loadPixels();  
	for(let y = 0; y < video.height; y++) {
		for(let x = 0; x < video.width; x++) {

			let index = (x + y * video.width) * 4;
			let r = video.pixels[index+0];
			let g = video.pixels[index+1];
			let b = video.pixels[index+2];
			var color = (r+g+b)/3;

			noFill();
			stroke(color);
			strokeWeight(10);
			rect(x*vScale, y*vScale, vScale, vScale);
		}
	}

}