import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarTableCellComponent } from './calendar-table-cell.component';

describe('CalendarTableCellComponent', () => {
  let component: CalendarTableCellComponent;
  let fixture: ComponentFixture<CalendarTableCellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarTableCellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarTableCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
