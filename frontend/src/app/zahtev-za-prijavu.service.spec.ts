import { TestBed } from '@angular/core/testing';

import { ZahtevZaPrijavuService } from './zahtev-za-prijavu.service';

describe('ZahtevZaPrijavuService', () => {
  let service: ZahtevZaPrijavuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZahtevZaPrijavuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
