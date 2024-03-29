import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit{

  title = 'kate-site';
  artType = 'drawing';
  isChecked = false;

  faBars = faBars;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.artType = this.router.url.substr(1);
  }

  ngAfterViewInit(): void {
  }

  hideNav(): void {
    this.isChecked = false;
  }

  checkboxChanged(status: boolean): void {
    this.isChecked = status;
    console.log(this.isChecked);
  }
}
