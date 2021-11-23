import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtsService {

  drawings_8 = [
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
  drawings_9 = [
    {id: 0, desc: '90% realism'},
    {id: 1, desc: 'a random cover I made called "Just the Same"'},
    {id: 2, desc: 'stars'},
    {id: 3, desc: 'she a shy girl'},
    {id: 4, desc: 'crying'},
    {id: 5, desc: 'plants and butterflys'},
    {id: 6, desc: 'prinesess'},
    {id: 7, desc: 'lily but drawn with dots'},
    {id: 8, desc: 'bumps of color'},
    {id: 9, desc: 'Din'},
    {id: 10, desc: 'deer girl with plants'},
    {id: 11, desc: 'Eri from MHA'},
    {id: 12, desc: 'Melody'},
    {id: 13, desc: 'CHEAK me out'},
    {id: 14, desc: 'an apple tree'},
    {id: 15, desc: 'secret garden'},
    {id: 16, desc: 'eyes! Everywere'}
  ];
  graphics_8 = [
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
  graphics_9 = [
    {id: 0, desc: 'a witch'},
    {id: 1, desc: 'girl that is an explorer'},
    {id: 2, desc: 'minecraft skin idea (doesn not work)'},
    {id: 3, desc: 'a girl that LOVES green'},
    {id: 4, desc: 'watercan'},
    {id: 5, desc: 'greens'},
    {id: 6, desc: 'abtract girl'},
    {id: 7, desc: 'glowing'},
    {id: 8, desc: 'AHH a demon'},
    {id: 9, desc: 'pretty sky'},
    {id: 10, desc: 'me and my friend'},
    {id: 11, desc: 'relistic girl'},
    {id: 12, desc: 'wow it is raining (new version)'},
    {id: 13, desc: 'wow it is raining'},
    {id: 14, desc: 'Denki from MHA'},
    {id: 15, desc: 'amazed girl'},
    {id: 16, desc: 'my friend as a gamer:'},
    {id: 17, desc: 'smurking girl'},
    {id: 18, desc: 'self portrait of me'},
    {id: 19, desc: 'girls'},
    {id: 20, desc: 'Crash!'},
    {id: 21, desc: 'lavader '},
    {id: 22, desc: 'I tried a totoural'},
    {id: 23, desc: 'waves by the shore'},
    {id: 24, desc: 'logo idea'},
    {id: 25, desc: 'princes'},
    {id: 26, desc: 'close-up'},
    {id: 27, desc: 'elf girl that says hi'},
    {id: 28, desc: 'whle girl'},
    {id: 30, desc: 'i tried to do this hack:'},
    {id: 31, desc: 'a girl that is cofused'},
    {id: 32, desc: 'a bird that loves the petals'},
    {id: 33, desc: 'baby bear girl'},
    {id: 34, desc: 'spooky libary'},
    {id: 35, desc: 'little fairies with a teenage girl'},
    {id: 36, desc: 'my dog, Kiwi:'},
    {id: 37, desc: 'when i am coufused:'},
    {id: 38, desc: 'France!'},
    {id: 39, desc: 'my parents'},
    {id: 40, desc: 'Eri'}
  ];
  paintings_8 = [
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
  paintings_9 = [
    {id: 0, desc: 'leaf girl'},
    {id: 1, desc: 'candy world(pt.1)'},
    {id: 2, desc: 'Think'},
    {id: 3, desc: 'under the sea'},
    {id: 4, desc: 'cheese with naughty rats'},
    {id: 5, desc: 'a witch(for holloween)'},
    {id: 6, desc: 'jelly fish'},
    {id: 7, desc: 'moon wolf'},
    {id: 8, desc: 'rabit'},
    {id: 9, desc: 'cats in space'},
    {id: 10, desc: 'yin yang cats'}
   ];
  animations_8 = [
    {id: 0, desc: 'flying bird'}
  ];
  animations_9 = [
    {id: 0, desc: 'I got my eye on you'},
    {id: 1, desc: 'eggs on a pan to a plate'},
    {id: 2, desc: 'my FAVORITE! Potatos'},
    {id: 3, desc: 'Apa from ATLA'},
    {id: 4, desc: 'why?'},
    {id: 5, desc: 'pencil factory'},
    {id: 6, desc: 'flower cycle'},
    {id: 7, desc: 'what a butifu- AHHHH'},
    {id: 8, desc: 'even dots are filled with love'},
    {id: 9, desc: 'AHHH A ATSROID'},
    {id: 10, desc: 'explorer'},
    {id: 11, desc: 'blink blink its me'}
  ];

  constructor() { }

  getArts(artType: string, age: number = 8): Array<{id: number, desc: string}>{
    // this.arts1 : Array<{id: number, desc: string}> = 
    return eval("this." +artType + "_" + age);
    // return arts;
    // if (artType === 'drawing'){
    //   return this.drawings;
    // }else if (artType === 'painting') {
    //   return this.paintings;
    // }else if (artType === 'graphics') {
    //   return this.graphics;
    // }else {
    //   return this.animations;
    // }
  }
}
