import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Myc1Component } from './myc1.component';

describe('Myc1Component', () => {
  let component: Myc1Component;
  let fixture: ComponentFixture<Myc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Myc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Myc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
