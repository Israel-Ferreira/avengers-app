import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvengersPage } from './avengers.page';

describe('AvengersPage', () => {
  let component: AvengersPage;
  let fixture: ComponentFixture<AvengersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvengersPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvengersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
