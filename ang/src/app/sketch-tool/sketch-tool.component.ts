import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sketch-tool',
  templateUrl: './sketch-tool.component.html',
  styleUrls: ['./sketch-tool.component.css']
})
export class SketchToolComponent implements OnInit {

  toolIDs: string[] = ['sketch-tool-pencil', 'sketch-tool-eraser', 'sketch-tool-image'];
  @Output() toolSelected = new EventEmitter<string>();
  @Output() imageSelected = new EventEmitter<File>();
  
  constructor() { }

  ngOnInit(): void {
  }

  pickTool(event: Event) {
    let elementId: string = '';
    let ele: Element = event.target as Element;
    if (ele.tagName.toLowerCase() === 'div') {
      elementId = ele.id;
    }else {
      elementId = ele.parentElement?.id as string;
    }
    this.toolIDs.forEach(id => {
      document.getElementById(id)?.classList.remove('active');
      if (elementId === id) {
        document.getElementById(id)?.classList.add('active');
      }
    })
    this.toolSelected.emit(elementId);
  }
}
