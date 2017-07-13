import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaVentanaComponent } from './agenda-ventana.component';

describe('AgendaVentanaComponent', () => {
  let component: AgendaVentanaComponent;
  let fixture: ComponentFixture<AgendaVentanaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgendaVentanaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
