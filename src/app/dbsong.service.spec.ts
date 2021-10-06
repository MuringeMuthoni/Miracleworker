import { TestBed } from '@angular/core/testing';

import { DbsongService } from './dbsong.service';

describe('DbsongService', () => {
  let service: DbsongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbsongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
