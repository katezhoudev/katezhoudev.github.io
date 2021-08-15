import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-age-selector',
  templateUrl: './age-selector.component.html',
  styleUrls: ['./age-selector.component.css']
})
export class AgeSelectorComponent implements OnInit {

  a8 = "active";
  a9 = "";

  @Output() ageEvent = new EventEmitter<number>(); 
  constructor() { }

  ngOnInit(): void {
    
  }

  selectedAge(age: number) {
    this.a8="";
    this.a9="";
    eval("this.a" + age + "= 'active';");
    this.ageEvent.emit(age);
  }
}
