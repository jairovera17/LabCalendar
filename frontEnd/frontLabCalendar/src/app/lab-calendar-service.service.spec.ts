import { TestBed, inject } from '@angular/core/testing';

import { LabCalendarService } from './lab-calendar.service';

describe('LabCalendarServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LabCalendarService]
    });
  });

  it('should be created', inject([LabCalendarService], (service: LabCalendarService) => {
    expect(service).toBeTruthy();
  }));
});
