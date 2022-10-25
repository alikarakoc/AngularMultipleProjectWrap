import { TestBed } from '@angular/core/testing';

import { AmazingLibraryService } from './amazing-library.service';

describe('AmazingLibraryService', () => {
  let service: AmazingLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazingLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
