import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundPage } from './round.page';

describe('RoundPage', () => {
  let component: RoundPage;
  let fixture: ComponentFixture<RoundPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
