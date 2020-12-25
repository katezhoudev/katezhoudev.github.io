import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ArtsService } from '../arts.service';

export interface SliderData {
  id: string;
  desc: string;
  url: string;
}

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})


export class SliderComponent implements OnInit, OnChanges {

  @Input() artType = 'drawing';
  @Input() selectedId = 0;

  slide: SliderData = {id: '0', desc: '', url: ''};


  constructor(private artsService: ArtsService) {

  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    const art = this.artsService.getArts(this.artType)[this.selectedId];
    this.slide = {
      id: '' + this.selectedId,
      desc: art.desc,
      url: '../assets/arts/' + this.artType + '/' + this.artType + art.id + '.jpg',
    };
  }

}
