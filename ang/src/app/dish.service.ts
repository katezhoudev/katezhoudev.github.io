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
    {id: 0, title: '红烧排骨', desc: 'this is a delicious dish', time: 15, serve: 4,
     steps: ['1）去血水，将排骨放入水中烧开，然后将水倒掉',
             '2）加入料酒，醋，酱油，糖，和水至刚淹没排骨。用大火烧开，然后小火焖至收汁。',
             '3）关火即可食用。'
            ]
    },
    {id: 1, title: '西兰花炒鸡片', desc: 'another delicious dish', time: 30, serve: 6,
      steps: ['1）西兰花洗净，掰开小块，鸡肉切片，放酱油，料酒，盐，淀粉，拌匀。',
              '2）西兰花开水焯一下',
              '3）起锅加热，放少许油，倒入鸡片，炒至六分熟，加入西兰花，炒至全熟。',
              '4）浇入蒜茸。'
            ]
    },
    {id: 2, title: '烤海鲈鱼', desc: 'traditional delicious dish', time: 20, serve: 5,
      steps: ['1） 鱼清理干净，用盐腌十五分钟',
              '2） 入锅，放少许油，煎至两面金黄，盛出，放烤盘。',
              '3）准备一些蔬菜：芹菜，芦笋，蘑菇，等，入锅，稍微炒熟。加入烧盘。',
              '4） 起锅，放少许油，放干辣椒，姜，蒜，辣椒酱，炒香。倒入少许鸡汤，煮开。浇在鱼上。',
              '5）烤箱预热至350度，放入烤盘，20分钟左右，烤至熟。']
    },
    {id: 3, title: ' 啤酒鸭', desc: 'traditional delicious dish', time: 20, serve: 5,
    steps: ['1）鸭子洗净，斩成块，过飞水。',
            '2）捞出沥干水份。',
            '3）开火，起锅，锅热后，加少许油，放入姜，蒜，炒香。',
            '4）加入两匙豆瓣酱翻炒，然后加入干辣椒和花椒翻炒，最后倒入鸭子与调料炒匀。',
            '5）倒入一罐啤酒，大火煮开后转小火焖至水将近干。可适量加少许盐或酱油进行调味。',
            '6）洒入葱段，香菜，出锅。']
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
