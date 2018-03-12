import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormApartmentsComponent } from './form-apartments.component';

describe('FormApartmentsComponent', () => {
  let component: FormApartmentsComponent;
  let fixture: ComponentFixture<FormApartmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormApartmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormApartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
