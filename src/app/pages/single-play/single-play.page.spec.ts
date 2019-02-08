import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlayPage } from './single-play.page';

describe('SinglePlayPage', () => {
  let component: SinglePlayPage;
  let fixture: ComponentFixture<SinglePlayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePlayPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePlayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
