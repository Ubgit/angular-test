import { TestBed } from '@angular/core/testing';

import { EditclientService } from './editclient.service';

describe('EditclientService', () => {
  let service: EditclientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditclientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
