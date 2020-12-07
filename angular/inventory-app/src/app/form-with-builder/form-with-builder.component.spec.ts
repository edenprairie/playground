import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithBuilderComponent } from './form-with-builder.component';

describe('FormWithBuilderComponent', () => {
  let component: FormWithBuilderComponent;
  let fixture: ComponentFixture<FormWithBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormWithBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
