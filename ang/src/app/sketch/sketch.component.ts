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
  pencil_draw: ()=>void;
  eraser_draw: ()=>void;

  constructor() {
    this.free_draw = () => {};
    this.pencil_keyPressed = () => {};
    this.pencil_draw = () => {};
    this.eraser_draw = () => {};
   }

  ngOnInit(): void {
    const sketch = (s:any) => {
      s.setup = () => {
        let canvasWidth = document.getElementById('sketch-holder')?.clientWidth;
        let canvas2 = s.createCanvas(canvasWidth, s.windowHeight-160);
        canvas2.parent('sketch-holder');

        s.background(255);
        s.strokeWeight(2);
        s.rect(0, 0, s.width, s.height);
        s.stroke([148, 0, 211]);
      };
      s.mouseReleased = () => {
      };
    };

    this.canvas = new p5(sketch);

    this.pencil_keyPressed = () => {
      if (this.canvas.key === 'd') {
        window.location.reload();
      }
    };
    
    this.free_draw = () => {
      if (this.canvas.mouseIsPressed) {
        if (this.canvas.mouseButton === this.canvas.LEFT) {
          this.canvas.line(this.canvas.mouseX, this.canvas.mouseY, this.canvas.pmouseX, this.canvas.pmouseY);
        }
      }
    };

    this.pencil_draw = () => {
      this.canvas.noErase();
      this.canvas.strokeWeight(2);
      this.free_draw();
    }

    this.eraser_draw = () => {
      this.canvas.erase();
      this.canvas.strokeWeight(10);
      this.free_draw();
    }

    this.canvas.draw = this.pencil_draw;
    this.canvas.keyPressed = this.pencil_keyPressed;
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

  doFileInput(event: Event) {
    let file = (event.target as HTMLInputElement).files[0];
    var tmppath = URL.createObjectURL(file);
    console.log(tmppath);
    this.canvas.loadImage(tmppath, img => {
      let aspect = img.width / img.height;
      console.log(aspect);
      let drawWidth = 1000;
      this.canvas.image(img, 0, 0, drawWidth, drawWidth/aspect, 0, 0, img.width, img.height)});
  }
}
