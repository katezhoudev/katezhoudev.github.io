import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dishes = this.dishService.getDishes();
  dish = this.dishes[0];

  constructor(private dishService: DishService) { }

  ngOnInit(): void {
  }
}