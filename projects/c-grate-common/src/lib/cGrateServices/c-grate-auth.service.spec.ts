import { TestBed } from '@angular/core/testing';

import { CGrateAuthService } from './c-grate-auth.service';

describe('CGrateAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CGrateAuthService = TestBed.get(CGrateAuthService);
    expect(service).toBeTruthy();
  });
});
