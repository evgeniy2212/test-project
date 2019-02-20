import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Datepicker3Component } from './datepicker3.component';

describe('Datepicker3Component', () => {
  let component: Datepicker3Component;
  let fixture: ComponentFixture<Datepicker3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Datepicker3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Datepicker3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
