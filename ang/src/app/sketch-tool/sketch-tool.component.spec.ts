import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchToolComponent } from './sketch-tool.component';

describe('SketchToolComponent', () => {
  let component: SketchToolComponent;
  let fixture: ComponentFixture<SketchToolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SketchToolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchToolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
