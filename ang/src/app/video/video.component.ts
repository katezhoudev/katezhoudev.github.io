import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements AfterViewInit {

  @ViewChild('videoElement') videoElement?: ElementRef<HTMLVideoElement>;

  videoSrcs: string[] = [
    '../assets/videos/kevin_piano1-480.mp4',
    '../assets/videos/kevin_piano2-480.mp4',
    '../assets/videos/kate-skate1.mp4'
  ];

  selectedVideo = 0;

  constructor() {

   }

  ngAfterViewInit(): void {
    this.playVideo(this.selectedVideo);
  }

  playVideo(videoIndex: number): void{
    this.videoElement?.nativeElement.pause();
    if (this.videoElement){
      this.videoElement.nativeElement.src = this.videoSrcs[videoIndex];
    }
    this.videoElement?.nativeElement.load();
  }

  nextVideo(): void {
    if (this.selectedVideo === 0){
      this.selectedVideo = this.videoSrcs.length - 1;
    }else {
        this.selectedVideo --;
    }
    this.playVideo(this.selectedVideo);
  }

  preVideo(): void {
    if (this.selectedVideo === this.videoSrcs.length - 1){
      this.selectedVideo = 0;
    }else {
        this.selectedVideo ++;
    }
    this.playVideo(this.selectedVideo);
  }

}



