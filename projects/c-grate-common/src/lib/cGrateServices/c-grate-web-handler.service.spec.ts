import { TestBed } from '@angular/core/testing';

import { CGrateWebHandlerService } from './c-grate-web-handler.service';

describe('CGrateWebHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CGrateWebHandlerService = TestBed.get(CGrateWebHandlerService);
    expect(service).toBeTruthy();
  });
});
