
export default class ball {
    canvas: any;
    location: any;
    velocity: any;
    accelation: any;
    initialized: boolean;
    color: any;
    r: number;
    g: number;
    b: number;
    xoff: number;
    yoff: number;

    constructor(canvas: any) {
        this.canvas = canvas;
        this.location = this.canvas.createVector(20, 20);
        this.velocity = this.canvas.createVector(2, 2);
        this.accelation = this.canvas.createVector(0.0, 0.0);
        this.r = this.canvas.random(0, 255);
        this.g = this.canvas.random(0, 255);
        this.b = this.canvas.random(0, 255);
        this.color = this.canvas.color(this.r, this.g, this.b);
        this.initialized = false;
        this.xoff = 100;
        this.yoff = 10000;
    }

    update() {
        this.velocity.x = this.canvas.map(this.canvas.noise(this.xoff), 0, 1, -5, 5);
        this.velocity.y = this.canvas.map(this.canvas.noise(this.yoff), 0, 1, -5, 5);
        this.xoff = this.xoff + 0.01;
        this.yoff = this.yoff + 0.01;
        this.location.add(this.velocity);
        this.velocity.add(this.accelation);
    }

    edge() {
        if(this.location.x > this.canvas.width){
            this.location.x = 0;
        }else if(this.location.x <0) {
            this.location.x = this.canvas.width;
        }
        if(this.location.y > this.canvas.height){
            this.location.y =0;
        }else if(this.location.y < 0) {
            this.location.y = this.canvas.height;
        }
    }

    init() {
        this.location.x = this.canvas.random(0, this.canvas.width);
        this.location.y = this.canvas.random(0, this.canvas.height);
        this.velocity.x = this.canvas.random(0, 5);
        this.velocity.y = this.canvas.random(0, 5);

    }

    display() {
        this.canvas.strokeWeight(0);
        this.canvas.fill(this.r, this.g, this.b, 150);
        this.canvas.ellipse(this.location.x, this.location.y, 100, 100);
    }

    draw() {
        if(!this.initialized) {
            this.init();
            this.initialized = true;
        }
        this.update();
        this.edge();
        this.display();
    }

    run() {
        this.canvas.draw = this.draw.bind(this);
    }

}