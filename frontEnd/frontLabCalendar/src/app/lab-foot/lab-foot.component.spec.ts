import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabFootComponent } from './lab-foot.component';

describe('LabFootComponent', () => {
  let component: LabFootComponent;
  let fixture: ComponentFixture<LabFootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabFootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabFootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
