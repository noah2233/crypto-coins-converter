import { TestBed } from '@angular/core/testing';

import { HttpApiKeyInterceptorService } from './http-api-key-interceptor.service';

describe('HttpApiKeyInterceptorService', () => {
  let service: HttpApiKeyInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpApiKeyInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
