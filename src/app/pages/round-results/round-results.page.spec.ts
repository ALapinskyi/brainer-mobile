import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundResultsPage } from './round-results.page';

describe('RoundResultsPage', () => {
  let component: RoundResultsPage;
  let fixture: ComponentFixture<RoundResultsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundResultsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundResultsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
