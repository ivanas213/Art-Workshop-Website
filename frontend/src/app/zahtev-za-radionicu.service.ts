import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ZahtevZaRadionicu } from './modeli/ZahtevZaRadionicu';

@Injectable({
  providedIn: 'root'
})
export class ZahtevZaRadionicuService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/zahtevZaRadionicu'

  dodajNovi(idd,sl,naz,dat,mes,op,sv,kom,dop,sm,org,gal){
    
    const pod={
      id:idd,
      slika:sl,
      naziv:naz,
      datum:dat,
      mesto:mes,
      opis:op,
      svidjanja:sv,
      komentari:kom,
      duzi_opis:dop,
      slobodna_mesta:sm,
      organizator:org,
      galerija:gal,
      status:'nov'
    }
    return this.http.post(`${this.url}/dodajNovi`,pod)
  }
  dohvatiSve(){
    return this.http.get(`${this.url}/dohvatiSve`)

  }
}
