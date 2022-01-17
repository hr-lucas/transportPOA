import { TestBed } from '@angular/core/testing';

import { PoaApiService } from './poa-api.service';

describe('PoaApiService', () => {
  let service: PoaApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoaApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
