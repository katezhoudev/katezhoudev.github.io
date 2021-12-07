import { Component, OnInit } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit {
  canvas: any;

  free_draw: ()=>void;
  pencil_keyPressed: ()=>void;
  pencil_touchStarted : ()=> boolean;
  pencil_draw: ()=>void;
  eraser_draw: ()=>void;

  constructor() {
    this.free_draw = () => {};
    this.pencil_keyPressed = () => {};
    this.pencil_touchStarted = () => {return false};
    this.pencil_draw = () => {};
    this.eraser_draw = () => {};
   }

  ngOnInit(): void {
    const sketch = (s:any) => {
      s.setup = () => {
        let canvasWidth = document.getElementById('sketch-holder')?.clientWidth;
        let canvas2 = s.createCanvas(canvasWidth, s.windowHeight-160);
        canvas2.parent('sketch-holder');
        s.canvas2 = canvas2;
        s.background(255);
        s.strokeWeight(4);
        s.stroke([148, 0, 211]);
      };
      s.mouseReleased = () => {
      };
    };

    this.canvas = new p5(sketch);

    this.pencil_keyPressed = () => {
      if (this.canvas.key === 'c') {
        window.location.reload();
      } else if (this.canvas.key === 's') {
        this.canvas.saveCanvas(this.canvas.canvas2, 'kiwi', 'jpg');
      }
    };

    this.pencil_touchStarted = () => {
      this.pencil_keyPressed();
      return false;
    }
    
    this.free_draw = () => {
      if (this.canvas.mouseIsPressed) {
        if (this.canvas.mouseButton === this.canvas.LEFT) {
          this.canvas.line(this.canvas.mouseX, this.canvas.mouseY, this.canvas.pmouseX, this.canvas.pmouseY);
        }
      }
    };

    this.pencil_draw = () => {
      this.canvas.noErase();
      this.canvas.strokeWeight(4);
      this.free_draw();
    }

    this.eraser_draw = () => {
      this.canvas.erase();
      this.canvas.strokeWeight(10);
      this.free_draw();
    }

    this.canvas.draw = this.pencil_draw;
    this.canvas.keyPressed = this.pencil_keyPressed;
    this.canvas.touchStarted = this.pencil_touchStarted;
  }

  changeColor($event: [number, number, number]) {
    this.canvas.stroke(this.canvas.color($event));
  }

  changeTool($event: string) {
    switch ($event) {
      case "sketch-tool-pencil":
        this.canvas.draw = this.pencil_draw;
        break;
      case "sketch-tool-eraser":
        this.canvas.draw = this.eraser_draw;
        break;
      case "sketch-tool-image":
        document.getElementById('sketch-image-input')?.click();
        break;
      default:
        this.canvas.draw = this.pencil_draw;
    }
  }

  doFileInput(event: any) {
    let file = event.target.files[0];
    var tmppath = URL.createObjectURL(file);
    console.log(tmppath);
    this.canvas.loadImage(tmppath, (img: any) => {
      let aspect = img.width / img.height;
      this.canvas.image(img, (this.canvas.width-this.canvas.height*aspect)/2.0, 0, this.canvas.height*aspect, this.canvas.height, 0, 0, img.width, img.height)});
  }
}
