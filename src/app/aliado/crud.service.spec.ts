/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CrudService } from './crud.service';

describe('Service: Crud', () => {
  let service: CrudService;
  beforeEach(() => {
    TestBed.configureTestingModule({ });
    service = TestBed.inject(CrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

});
