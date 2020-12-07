import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDemo2Component } from './popup-demo2.component';

describe('PopupDemo2Component', () => {
  let component: PopupDemo2Component;
  let fixture: ComponentFixture<PopupDemo2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupDemo2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDemo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
