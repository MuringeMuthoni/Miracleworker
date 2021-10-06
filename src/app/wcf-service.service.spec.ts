import { TestBed } from '@angular/core/testing';

import { WcfServiceService } from './wcf-service.service';

describe('WcfServiceService', () => {
  let service: WcfServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WcfServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
