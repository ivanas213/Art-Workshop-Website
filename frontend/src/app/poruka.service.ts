import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PorukaService {
  url='http://localhost:4000/poruka'

  constructor(private http:HttpClient) { }
  dohvatiSve(korisnik_iz_baze,radionica_iz_baze){
    const podaci={
      korisnik:korisnik_iz_baze,
      radionica:radionica_iz_baze
    }
    return this.http.post(`${this.url}/dohvatiSve`,podaci)
  }
  dodaj(k,r,t,d,ko){
    const podaci={
      korisnik:k,
      radionica:r,
      tekst:t,
      datum_i_vreme:d,
      kor:ko
    }
    return this.http.post(`${this.url}/dodaj`,podaci)

  }
}
