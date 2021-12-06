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
  age = 8;
  displaySlide = false;
  selectedSlideId = 3;

  constructor(private artsService: ArtsService, private router: Router) {
  }

  ngOnInit(): void {
    this.artType = this.router.url.substr(1);
    this.arts = this.artsService.getArts(this.artType, this.age);
  }


  ageSelected(age: number){
    this.age = age;
    this.arts = this.artsService.getArts(this.artType, this.age);
  }

  showSlide(id: number, age: number): void {
    this.artType = this.router.url.substr(1);
    this.selectedSlideId = id;
    this.displaySlide = true;
  }

  hideSlide(): void {
    this.displaySlide = false;
  }
}

