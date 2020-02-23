import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithNgModelComponent } from './form-with-ng-model.component';

describe('FormWithNgModelComponent', () => {
  let component: FormWithNgModelComponent;
  let fixture: ComponentFixture<FormWithNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
