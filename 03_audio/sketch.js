let size = 50;
var mic, fft;
var bandWidth;


function setup() {
	createCanvas(windowWidth, windowHeight);

	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT(0.9, 128);
	fft.setInput(mic);
	bandWidth = width / 128;
}

function draw() {
	background(255);
	var volume = mic.getLevel();
	var spectrum = fft.analyze();
	var value = map(volume, 0, 1, 1, 100);

	for (var i = 0; i < spectrum.length; i++) {
		var amp = spectrum[i];
		var y = map(amp, 0, 255, height, 0);
		rect(i * bandWidth, y, bandWidth, height - y);
	}

	var bass = spectrum[3];
	var bassValue = map(bass, 200, 255, 0, 200);
	ellipse(width/2, height/2, bassValue, bassValue);

	// for(let y = 0; y < height; y+=size) {
	// 	for(let x = 0; x < width; x+=size) {
	// 	}
	// }

}