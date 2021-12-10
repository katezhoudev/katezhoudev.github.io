export default class eraser {
    canvas: any;
    constructor(canvas1: any){
        this.canvas = canvas1;
    }

    draw() {
      this.canvas.erase();
      this.canvas.strokeWeight(10);
      if (this.canvas.mouseIsPressed) {
        if (this.canvas.mouseButton === this.canvas.LEFT) {
          this.canvas.line(this.canvas.mouseX, this.canvas.mouseY, this.canvas.pmouseX, this.canvas.pmouseY);
        }
      }
    }

    touchMoved() {
      this.draw();
      return false;
    };

    useit() {
        this.canvas.draw = this.draw.bind(this);
        this.canvas.touchMoved = this.touchMoved.bind(this);
    }
}