let previousState;

let stateIndex = 0;

function setup() {
  createCanvas(400, 400);
  background(255);
  // save state at beginning for blank canvas
  rect(0, 0, 100, 100);
  saveState();
}

function draw() {
  if (mouseIsPressed) {
    fill(random(255), random(255), random(255));
    circle(mouseX, mouseY, 20);
  }
}

function keyPressed(e) {
  // check if the event parameter (e) has Z (keycode 90) and ctrl or cmnd
  if (e.keyCode == 90 && (e.ctrlKey || e.metaKey)) {
    undoToPreviousState();
  }
}

function undoToPreviousState() {
  // if previousState doesn't exist ie is null
  // return without doing anything
  if (!previousState) {
    return;
  }
  // else draw the background (in this case white)
  // and draw the previous state
  background(255);
  image(previousState, 0, 0);
  // then set previous state to null
  previousState = null;
}

function mousePressed() {
  // the moment input is detect save the state
  saveState();
}

function saveState() {
  // save state by taking image of background
  // for more info look at reference for get
  let img = get();
  previousState = img;
}