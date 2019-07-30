import { TestBed } from '@angular/core/testing';

import { CGrateCommonService } from './c-grate-common.service';

describe('CGrateCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CGrateCommonService = TestBed.get(CGrateCommonService);
    expect(service).toBeTruthy();
  });
});
