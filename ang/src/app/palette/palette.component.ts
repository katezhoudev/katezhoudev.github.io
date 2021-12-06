import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-palette',
  templateUrl: './palette.component.html',
  styleUrls: ['./palette.component.css']
})
export class PaletteComponent implements OnInit {

  @Output() colorSelected = new EventEmitter<[number, number, number]>();

  selectedColor: [number, number, number] = [0, 0, 0];

  constructor() { }

  ngOnInit(): void {
  }

  pickColor(event: Event): void {
    let elementId: string = (event.target as Element).id;
    switch (elementId) {
      case 'palette-color-1':
        this.selectedColor = [148, 0, 211];
        break;
      case 'palette-color-2':
        this.selectedColor = [75, 0, 130];
        break;
      case 'palette-color-3':
        this.selectedColor = [0, 0, 255];
        break;
      case 'palette-color-4':
        this.selectedColor = [0, 255, 0];
        break;
      case 'palette-color-5':
        this.selectedColor = [255, 255, 0];
        break;
      case 'palette-color-6':
        this.selectedColor = [255, 127, 0];
        break;
      case 'palette-color-7':
        this.selectedColor = [255, 0, 0];
        break;
      default:
        this.selectedColor = [148, 0, 211];
    }
    this.colorSelected.emit(this.selectedColor);
    Array.from(Array(10).keys()).forEach(n => {
      document.getElementById("palette-color-" + n)?.classList.remove('active');
    });
    document.getElementById(elementId)?.classList.add('active');
  }
}
