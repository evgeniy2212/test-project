import { TestBed } from '@angular/core/testing';

import { DateTransferService } from './date-transfer.service';

describe('DateTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateTransferService = TestBed.get(DateTransferService);
    expect(service).toBeTruthy();
  });
});
