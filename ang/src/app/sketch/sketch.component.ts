import { Component, OnDestroy, OnInit } from '@angular/core';
import * as p5 from 'p5';
import pencil from './pencil';
import eraser from './eraser';
import sketchState from './sketchState';

@Component({
  selector: 'app-sketch',
  templateUrl: './sketch.component.html',
  styleUrls: ['./sketch.component.css']
})
export class SketchComponent implements OnInit, OnDestroy {
  canvas: any;
  pencil: any;
  eraser: any;
  sketchState: any;
  firstClick: boolean;

  constructor() {
    this.firstClick = true;
    this.sketchState = new sketchState();
    console.log("sketch constructor");
  }

  ngOnInit(): void {
    console.log("sketch ngoninit start");
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
      s.mousePressed = () => {
        if(this.firstClick){
          this.sketchState.addState(this.canvas.get());
          this.firstClick = false;
        }      
      };
      s.mouseReleased = () => {
      };
    };

    console.log("sketch before create canvas");
    this.canvas = new p5(sketch);
    console.log(this.canvas);
    console.log("sketch after create canvas");
    this.pencil = new pencil(this.canvas, this.sketchState);
    this.eraser = new eraser(this.canvas);

    this.pencil.useit();
    console.log("sketch ngoninit");
  }

  captureCanvas () {
    let capture = null
    try {
      capture = this.canvas.get();
    }
    catch (err) {
      return null;
    }
    return capture;
  }

  ngOnDestroy() {
    this.canvas.touchMoved = () => {return true};
    this.canvas.remove();
    console.log("sketch ngondestroy");
  }

  changeColor($event: [number, number, number]) {
    this.canvas.stroke(this.canvas.color($event));
  }

  changeTool($event: string) {
    switch ($event) {
      case "sketch-tool-pencil":
        this.pencil.useit();
        break;
      case "sketch-tool-eraser":
        this.eraser.useit();
        break;
      case "sketch-tool-image":
        document.getElementById('sketch-image-input')?.click();
        break;
      default:
        this.pencil.useit();
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
