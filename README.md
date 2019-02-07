# P5.js-for-beginners
this is the repo for the P5.js for beginners workshop during PCD 2019 Basel

## Setup

Let's first download a code editor of your choice and install a live server plugin. This simulates that your sketch is already in the web.

### Visual Studio Code

1. [Install Visual Studio Code](https://code.visualstudio.com/)
2. Go to Plugins and search for Live Server by Ritwick Dey -> Install
3. Open current project folder in Visual Studio Code
4. In the bottom right corner click -> Go Live
5. A browser window will open showing the project.

### Atom

1. [Install Atom](https://atom.io/)
2. Install atom-live-server from Preferences -> Install -> Install Packages
3. Open current project folder in Atom
4. From Menu Bar open Packages -> atom-live-server -> run ....
5. A browser window will open showing the project.


## Folder Structure

```
project
│   README.md   -- the file you are reading
│
└───00_empty_template
    │   index.html -- the file shown by the browser
    │   sketch.js -- this is where your p5.js code will go!
    │
    └─── assets -- the files required by the website
    │    │  
    │    │
    │    └───css
    │    │   └───style.css -- stylesheet for this website
    │    │
    │    └───p5js -- p5js library
    │
    │
    └─── same for the other templates
```

<!--## P5.js in General

P5.js is generally divided into two blocks - setup & draw - like in the following example:

```
function setup() {
	createCanvas(720, 400);
}

function draw() {
	rect(0, 0, 50, 50);
}
```

The setup block is often use to setup parts of the code that stay the same for the duration of the program. In all P5.js sketches, the size of the canvas (the drawing surface) must be defined in the head.

Unless otherwise defined, the draw block runs 60 times a second. Thingschanged here will be displayed -->

## Outlook

[Daniel Shiffman - creative coding guru](https://shiffman.net/)

[Learn more from the P5.js website!](https://p5js.org/learn/)

[ml5.js - Friendly Machine Learning for the Web.](https://ml5js.org/)

[P5.js subreddit](https://www.reddit.com/r/p5js/)
