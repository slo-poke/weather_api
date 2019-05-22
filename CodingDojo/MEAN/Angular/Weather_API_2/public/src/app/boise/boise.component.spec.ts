import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiseComponent } from './boise.component';

describe('BoiseComponent', () => {
  let component: BoiseComponent;
  let fixture: ComponentFixture<BoiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
