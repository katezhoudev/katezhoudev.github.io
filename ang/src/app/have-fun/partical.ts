export default class partical {
    canvas: any;
    location: any;
    velocity: any;
    accelation: any;
    lifespan: number;
    initialized: boolean;
    size: number;
    color: any;

    constructor(canvas: any, l: any) {
        this.canvas = canvas;
        let c = this.canvas;
        this.location = l;
        this.velocity = c.createVector(c.random(-3, 3), -3);
        this.accelation = this.canvas.createVector(0.0, 0.1);
        this.initialized = false;
        this.lifespan = 255;
        this.size = 3;
        this.color = c.color(c.random(0, 255), c.random(0, 255), c.random(0, 255));
    }

    update() {
        this.location.add(this.velocity);
        this.velocity.add(this.accelation);
        this.lifespan -= 1.0;
    }

    init() {
        this.velocity.x = this.canvas.random(0, 5);
        this.velocity.y = this.canvas.random(0, 5);
    }

    display() {
        this.canvas.strokeWeight(this.color.r, this.color.g, this.color.b, this.lifespan);
        this.canvas.fill(this.color, this.lifespan);
        this.canvas.ellipse(this.location.x, this.location.y, this.size, this.size);
    }

    isDead() {
        if (this.lifespan < 0){
            return true;
        }
        return false;
    }
}