import { Injectable } from '@angular/core';

export interface Dish {
  id: number;
  title: string;
  desc: string;
  time: number;
  serve: number;
  steps: string[];
}

@Injectable({
  providedIn: 'root'
})
export class DishService {

  dishes: Dish[] = [
    {id: 0, title: 'Chinese noodle', desc: 'this is a delicous dish', time: 15, serve: 4,
     steps: ['1. clean up the dishes',
             '2. put the flour, and make the cake',
             '3. put in the dish',
             '4. decorate the the dish with the fruit',
             '5. present to the customer']
    },
    {id: 1, title: 'Kongpu chicken', desc: 'another delicous dish', time: 30, serve: 6,
      steps: ['1. clean up the dishes',
              '2. put the flour, and make the cake',
              '3. put in the dish',
              '4. decorate the the dish with the fruit',
              '5. present to the customer']
    },
    {id: 2, title: 'general chicken', desc: 'traditional delicous dish', time: 20, serve: 5,
      steps: ['1. clean up the dishes',
              '2. put the flour, and make the cake',
              '3. put in the dish',
              '4. decorate the the dish with the fruit',
              '5. present to the customer']
    }
   ];

  constructor() { }

  getDish(id: number): Dish {
    return this.dishes[id];
  }

  getDishes(): Dish[] {
    return this.dishes;
  }
}
