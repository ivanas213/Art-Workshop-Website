import { TestBed } from '@angular/core/testing';

import { ZahtevZaRadionicuService } from './zahtev-za-radionicu.service';

describe('ZahtevZaRadionicuService', () => {
  let service: ZahtevZaRadionicuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZahtevZaRadionicuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
