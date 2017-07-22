import { TestBed, inject } from '@angular/core/testing';

import { ConvocontrollerService } from './convocontroller.service';

describe('ConvocontrollerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConvocontrollerService]
    });
  });

  it('should ...', inject([ConvocontrollerService], (service: ConvocontrollerService) => {
    expect(service).toBeTruthy();
  }));
});
