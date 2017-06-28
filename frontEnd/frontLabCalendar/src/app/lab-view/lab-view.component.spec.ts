import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabViewComponent } from './lab-view.component';

describe('LabViewComponent', () => {
  let component: LabViewComponent;
  let fixture: ComponentFixture<LabViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
