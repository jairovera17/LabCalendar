import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekViewCalendarComponent } from './week-view-calendar.component';

describe('WeekViewCalendarComponent', () => {
  let component: WeekViewCalendarComponent;
  let fixture: ComponentFixture<WeekViewCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekViewCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekViewCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
