import { Injectable } from '@angular/core';

export interface Dish {
  id: number;
  title: string;
  desc: string;
  time: number;
  serve: number;
}

@Injectable({
  providedIn: 'root'
})
export class DishService {

  dishes: Dish[] = [
    {id: 0, title: 'Chinese noodle', desc: 'this is a delicous dish', time: 15, serve: 4},
    {id: 1, title: 'Kongpu chicken', desc: 'another delicous dish', time: 30, serve: 6},
    {id: 2, title: 'general chicken', desc: 'traditional delicous dish', time: 20, serve: 5},
    {id: 3, title: 'Chinese noodle', desc: 'this is a delicous dish', time: 15, serve: 4},
    {id: 4, title: 'Kongpu chicken', desc: 'another delicous dish', time: 30, serve: 6},
    {id: 5, title: 'general chicken', desc: 'traditional delicous dish', time: 20, serve: 5},
    {id: 6, title: 'Chinese noodle', desc: 'this is a delicous dish', time: 15, serve: 4},
    {id: 7, title: 'Kongpu chicken', desc: 'another delicous dish', time: 30, serve: 6},
    {id: 8, title: 'general chicken', desc: 'traditional delicous dish', time: 20, serve: 5},
    {id: 9, title: 'Chinese noodle', desc: 'this is a delicous dish', time: 15, serve: 4},
    {id: 10, title: 'Kongpu chicken', desc: 'another delicous dish', time: 30, serve: 6},
   ];

  constructor() { }

  getDish(id: number): Dish {
    return this.dishes[id];
  }

  getDishes(): Dish[] {
    return this.dishes;
  }
}
