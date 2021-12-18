export default class pencil {
    canvas: any;
    sketchState: any;
    constructor(canvas1: any, sketchState1: any){
        this.canvas = canvas1;
        this.sketchState = sketchState1;
    }

    draw() {
        this.canvas.noErase();
        if (this.canvas.mouseIsPressed) {
            if (this.canvas.mouseButton === this.canvas.LEFT) {
              this.canvas.line(this.canvas.mouseX, this.canvas.mouseY, this.canvas.pmouseX, this.canvas.pmouseY);
            }
        }
    }

    keyPressed() {
        if (this.canvas.key === 'c') {
          let img = this.canvas.get();
          this.sketchState.addState(img);
          window.location.reload();
        } else if (this.canvas.key === 's') {
          this.canvas.saveCanvas(this.canvas.canvas2, 'kiwi', 'jpg');
        } else if (this.canvas.key === 'z') {
          let img = this.sketchState.preState();
          img!=null && this.canvas.image(img, 0, 0);  
        } else if (this.canvas.key === 'u') {
          let img = this.sketchState.nextState();
          img!=null && this.canvas.image(img, 0, 0);
        }
    }

    touchMoved() {
        this.canvas.noErase();
        this.canvas.line(this.canvas.mouseX, this.canvas.mouseY, this.canvas.pmouseX, this.canvas.pmouseY);
        return false;
      };

    mouseReleased() {
      this.sketchState.addState(this.canvas.get());
    }

    useit() {
        this.canvas.draw = this.draw.bind(this);
        this.canvas.keyPressed = this.keyPressed.bind(this);
        this.canvas.touchMoved = this.touchMoved.bind(this);
        this.canvas.mouseReleased = this.mouseReleased.bind(this);
    }
}