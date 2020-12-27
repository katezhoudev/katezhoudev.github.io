import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish',
  templateUrl: './dish.component.html',
  styleUrls: ['./dish.component.css']
})
export class DishComponent implements OnInit {
  dishes = this.dishService.getDishes();

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
  }

}
