import ball from "./ball";

export default class balls {
    canvas: any;
    ballArray: ball[];

    constructor(canvas: any) {
        this.canvas = canvas;
        this.ballArray = [];
        this.ballArray.push(new ball(this.canvas));
    }

    mousePressed() {
        this.ballArray.push(new ball(this.canvas));
    }

    draw() {
        this.canvas.background(255);
        for(let i=0; i<this.ballArray.length; i++){
            this.ballArray[i].draw();
        }
    }

    run() {
        this.canvas.mousePressed = this.mousePressed.bind(this);
        this.canvas.draw = this.draw.bind(this);
    }
}