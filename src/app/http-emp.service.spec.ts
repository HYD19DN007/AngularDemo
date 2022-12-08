import { TestBed } from '@angular/core/testing';

import { HttpEmpService } from './http-emp.service';

describe('HttpEmpService', () => {
  let service: HttpEmpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpEmpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
