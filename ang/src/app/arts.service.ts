import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {

  drawings = [
    {id: 0, desc: 'Flowers'},
    {id: 1, desc: 'pinapple'},
    {id: 2, desc: 'yummy custard pie'},
    {id: 3, desc: 'yay! It is fall'},
    {id: 4, desc: 'Junk food'},
    {id: 5, desc: 'the magic tree'},
    {id: 6, desc: 'I love cherrys'},
    {id: 7, desc: 'yay! It is summer'},
    {id: 8, desc: 'rainbow Starbucks'},
    {id: 9, desc: 'mm stawberry'},
    {id: 10, desc: 'I love blueberrys and the color blue!'},
    {id: 11, desc: 'peaches'},
    {id: 12, desc: 'nock nock! A woodpecker'},
    {id: 13, desc: 'a happy girl'},
    {id: 14, desc: 'anime'},
    {id: 15, desc: 'a funny girl'},
    {id: 16, desc: 'it is me kate!'},
    {id: 17, desc: 'deserts'},
    {id: 18, desc: 'lets go to the beech'},
    {id: 19, desc: 'chinese food'},
    {id: 20, desc: 'a cool girl'},
    {id: 21, desc: 'cubes can create anything!'},
    {id: 22, desc: 'christmas!'},
    {id: 23, desc: 'devel + angel'},
    {id: 24, desc: 'cupid'},
    {id: 25, desc: 'my zoiac sign in human'},
    {id: 26, desc: 'school starts!'},
    {id: 27, desc: 'Kate!'},
    {id: 28, desc: 'snow'},
    {id: 29, desc: 'Raven in teen titens go'},
    {id: 30, desc: 'FLOATING flower girl'},
    {id: 31, desc: 'VSCO girl (girly girl)'},
    {id: 32, desc: 'rock\'n mermaid'},
    {id: 33, desc: 'Mom is a cook!'},
    {id: 34, desc: 'mermaid'},
    {id: 35, desc: 'DJ'},
    {id: 36, desc: 'dog girl'},
    {id: 37, desc: 'splash!'},
    {id: 38, desc: 'gamer girl'},
    {id: 39, desc: 'california'},
    {id: 40, desc: 'Fall witch girl'},
    {id: 41, desc: 'cute bunny girl'},
    {id: 42, desc: 'thunderdtorm'},
    {id: 43, desc: 'phenex'},
    {id: 44, desc: 'pengin'},
    {id: 45, desc: 'close up girl'},
    {id: 46, desc: '4 years ago me and my woderful dad!'},
    {id: 47, desc: 'look at that dress!'},
    {id: 48, desc: 'cool girl'},
    {id: 49, desc: 'YAY we are at the beach'},
    {id: 50, desc: 'teacher'},
    {id: 51, desc: 'a girl/ME!'},
    {id: 52, desc: 'waves'},
    {id: 53, desc: 'ordinary girl'},
    {id: 54, desc: 'mulan'},
    {id: 55, desc: 'A unicorn and a girl'},
    {id: 56, desc: 'CHIPS!'},
    {id: 57, desc: 'flower dress'},
    {id: 58, desc: 'a dalmatian as a human'},
    {id: 59, desc: 'a old car'},
    {id: 60, desc: 'dogs'}
  ];
  graphics = [
    {id: 0, desc: 'the world without gravity'},
    {id: 1, desc: 'cookie girl'},
    {id: 2, desc: 'mommy\'s purse'},
    {id: 3, desc: 'fasion racoon'},
    {id: 4, desc: 'be careful'},
    {id: 5, desc: 'Chritsmas'},
    {id: 6, desc: '4 flowers'},
    {id: 7, desc: 'were on a adventure!'},
    {id: 8, desc: 'buns'},
    {id: 9, desc: 'food'},
    {id: 10, desc: '1 graphic anime girl'},
    {id: 11, desc: '2 graphic anime girl'},
    {id: 12, desc: '3 graphic anime girl'},
    {id: 13, desc: '4 graphic anime girl'},
    {id: 14, desc: 'a house'},
    {id: 15, desc: 'midnight'},
    {id: 16, desc: 'library compition'},
    {id: 17, desc: 'a cunfused maid'},
    {id: 18, desc: 'glitchy girl'},
    {id: 19, desc: 'Let\'s party!'},
    {id: 20, desc: 'a sunny day'},
    {id: 21, desc: 'Let\'s skate '},
    {id: 22, desc: 'rainy to sunny'},
    {id: 23, desc: 'noodles'},
    {id: 24, desc: 'ice cream'}
  ];
  paintings = [
   {id: 0, desc: 'Chritsmas trees'},
   {id: 1, desc: 'A happy bear'},
   {id: 2, desc: 'A water fall'},
   {id: 3, desc: 'save the trees'},
   {id: 4, desc: 'a lot of flowers'},
   {id: 5, desc: 'pink!'},
   {id: 6, desc: 'birb tree'},
   {id: 7, desc: 'vase'},
   {id: 8, desc: 'quilt'},
   {id: 9, desc: 'mountain'},
   {id: 10, desc: 'cherry girl'},
   {id: 11, desc: 'blue girl in a blue world'}
  ];
  animations = [
    {id: 0, desc: 'Chritsmas trees'}
  ];

  constructor() { }

  getArts(artType: string): Array<{id: number, desc: string}>{
    if (artType === 'drawing'){
      return this.drawings;
    }else if (artType === 'painting') {
      return this.paintings;
    }else if (artType === 'graphics') {
      return this.graphics;
    }else {
      return this.animations;
    }
  }
}
