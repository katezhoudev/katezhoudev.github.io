import partical from "./partical";

export default class particalSystem {
    canvas: any;
    particalArray: partical[];
    initialized: boolean;

    constructor(canvas: any) {
        this.canvas = canvas;
        this.particalArray = [];
        this.initialized = false;
    }

    mousePressed() {
        // this.particalArray.push(new partical(this.canvas));
    }

    init() {
        let numParticals = 1000;
        let c = this.canvas;
        for (let i=0; i<numParticals; i++) {
            let l = c.createVector(c.random(0, c.width), c.random(0, c.height));
            let p = new partical(this.canvas, l);
            this.particalArray.push(p);    
        }
    }

    draw() {
        let n = 20;
        for (let i=0; i<n; i++) {
            this.particalArray.push(new partical(this.canvas, this.canvas.createVector(this.canvas.width/2, 50)));
        }
        this.canvas.background(255);
        console.log(this.particalArray.length)
        for(let i=0; i<this.particalArray.length; i++){
            this.particalArray[i].update();
            this.particalArray[i].display();
            if(this.particalArray[i].isDead()){
                this.particalArray.splice(i, 1);
            }
        }
    }

    run() {
        this.canvas.mousePressed = this.mousePressed.bind(this);
        this.canvas.draw = this.draw.bind(this);
    }
}