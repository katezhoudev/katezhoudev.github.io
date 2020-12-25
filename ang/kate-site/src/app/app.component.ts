import { Component, OnInit } from '@angular/core';
// import { Event } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kate-site';
  artType = 'drawing';

  constructor(private router: Router) { }

  ngOnInit(): void {
    // this.artType = this.router.url.substr(1);
  }

}
