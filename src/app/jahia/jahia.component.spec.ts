import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JahiaComponent } from './jahia.component';

describe('JahiaComponent', () => {
  let component: JahiaComponent;
  let fixture: ComponentFixture<JahiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JahiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JahiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
