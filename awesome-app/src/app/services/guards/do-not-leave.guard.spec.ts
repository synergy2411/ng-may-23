import { TestBed } from '@angular/core/testing';

import { DoNotLeaveGuard } from './do-not-leave.guard';

describe('DoNotLeaveGuard', () => {
  let guard: DoNotLeaveGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DoNotLeaveGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
