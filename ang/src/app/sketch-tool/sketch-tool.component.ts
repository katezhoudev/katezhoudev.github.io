import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPencilAlt, faEraser, faImage } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sketch-tool',
  templateUrl: './sketch-tool.component.html',
  styleUrls: ['./sketch-tool.component.css']
})
export class SketchToolComponent implements OnInit {

  toolIDs: string[] = ['sketch-tool-pencil', 'sketch-tool-eraser', 'sketch-tool-image'];
  @Output() toolSelected = new EventEmitter<string>();
  @Output() imageSelected = new EventEmitter<File>();

  faPencilAlt = faPencilAlt;
  faEraser = faEraser;
  faImage = faImage;

  
  constructor() { }

  ngOnInit(): void {
  }

  pickTool(event: Event) {
    let elementId: string = '';
    let ele: Element = event.target as Element;
    console.log(ele.tagName);
    while (ele!=null && ele.tagName.toLowerCase() !== 'div') {
      if (ele.parentElement != null) {
        ele = ele.parentElement;
      }
    }
    elementId = ele.id;

    if (elementId !== 'sketch-tool-image') {
      this.toolIDs.forEach(id => {
        {
         document.getElementById(id)?.classList.remove('active');
         if (elementId === id) {
           document.getElementById(id)?.classList.add('active');
         }  
        }
      })
    }
    this.toolSelected.emit(elementId);
  }
}
