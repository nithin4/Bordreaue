import { TestBed } from '@angular/core/testing';

import { BordreauService } from "./BordreauService";

describe('BordreauService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BordreauService = TestBed.get(BordreauService);
    expect(service).toBeTruthy();
  });
});
