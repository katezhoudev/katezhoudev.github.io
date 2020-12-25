import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArtsService } from '../arts.service';

@Component({
  selector: 'app-arts',
  templateUrl: './arts.component.html',
  styleUrls: ['./arts.component.css']
})
export class ArtsComponent implements OnInit {

  arts: {id: number, desc: string}[] = [];
  artType = 'drawing';
  displaySlide = false;
  selectedSlideId = 3;

  constructor(private artsService: ArtsService, private router: Router) {
  }

  ngOnInit(): void {
    this.artType = this.router.url.substr(1);
    this.setArts(this.artType);
  }

  setArts(artType: string): void {
    this.arts = this.artsService.getArts(artType);
  }

  showSlide(id: number): void {
    this.artType = this.router.url.substr(1);
    this.selectedSlideId = id;
    this.displaySlide = true;
  }

  hideSlide(): void {
    this.displaySlide = false;
  }
}

