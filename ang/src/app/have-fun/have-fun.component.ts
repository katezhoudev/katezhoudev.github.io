import { Component, OnInit } from '@angular/core';
declare var p5: any;
import balls from './balls';
import particalSystem from './particalSystem';

@Component({
  selector: 'app-have-fun',
  templateUrl: './have-fun.component.html',
  styleUrls: ['./have-fun.component.css']
})
export class HaveFunComponent implements OnInit {
  canvas: any;
  song: any;
  index: number;
  systems: any;

  constructor() { 
    this.index = 0;
  }

  ngOnInit(): void {
    const sketch = (s:any) => {
      s.preload = () => {
        // this.song = this.canvas.loadSound('../../assets/musics/kate_made1.wav');
        this.song = this.canvas.loadSound('../../assets/musics/sample-15s.mp3');
      }
      s.setup = () => {
        let canvasWidth = document.getElementById('havefun-holder')?.clientWidth;
        let canvas2 = s.createCanvas(canvasWidth, s.windowHeight-160);
        canvas2.parent('havefun-holder');
        s.canvas2 = canvas2;
        s.background(255);
        s.strokeWeight(4);
        s.stroke([148, 0, 211]);
      };
      s.mousePressed = () => {
      };
      s.mouseReleased = () => {
        this.playMusic();
      };
      s.touchMoved = () => {
        this.canvas.noErase();
        this.canvas.line(this.canvas.mouseX, this.canvas.mouseY, this.canvas.pmouseX, this.canvas.pmouseY);
        return false;
      }
      s.keyPressed = () => {
        if (this.canvas.key === 'n') {
          this.index = (this.index + 1) % 2;
        }
        this.systems[this.index].run();
    }
    };

    this.canvas = new p5(sketch);
    this.systems = [new balls(this.canvas), new particalSystem(this.canvas)];
    this.systems[this.index].run();

  }

  ngOnDestroy() {
    this.canvas.touchMoved = () => {return true};
    this.canvas.remove();
    console.log("havefun ngondestory");
  }

  playMusic() {
    if (this.song.isPlaying()) {
      this.song.stop();
    } else {
      this.song.setLoop(true);
      this.song.play();
    }
  }
}


