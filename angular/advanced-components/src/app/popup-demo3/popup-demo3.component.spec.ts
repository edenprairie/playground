import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDemo3Component } from './popup-demo3.component';

describe('PopupDemo3Component', () => {
  let component: PopupDemo3Component;
  let fixture: ComponentFixture<PopupDemo3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDemo3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDemo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
