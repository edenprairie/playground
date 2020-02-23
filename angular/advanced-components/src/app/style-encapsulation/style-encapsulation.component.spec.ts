import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleEncapsulationComponent } from './style-encapsulation.component';

describe('StyleEncapsulationComponent', () => {
  let component: StyleEncapsulationComponent;
  let fixture: ComponentFixture<StyleEncapsulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleEncapsulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleEncapsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
