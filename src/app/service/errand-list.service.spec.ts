import { TestBed, inject } from '@angular/core/testing';

import { ErrandListService } from './errand-list.service';

describe('ErrandListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ErrandListService]
    });
  });

  it('should be created', inject([ErrandListService], (service: ErrandListService) => {
    expect(service).toBeTruthy();
  }));
});
