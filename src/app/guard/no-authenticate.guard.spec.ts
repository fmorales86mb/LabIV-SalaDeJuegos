import { TestBed } from '@angular/core/testing';

import { NoAuthenticateGuard } from './no-authenticate.guard';

describe('NoAuthenticateGuard', () => {
  let guard: NoAuthenticateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoAuthenticateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
