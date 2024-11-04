import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KorisnikService } from './korisnik.service';
import { Zahtev } from './modeli/Zahtev';

@Injectable({
  providedIn: 'root'
})
export class ZahtevService {

  constructor(private http:HttpClient, private kservice:KorisnikService) { }
  url='http://localhost:4000/zahtev'

  dodajNovi(id_iz_forme,korisnicko_ime_iz_forme,lozinka_iz_forme,ime_iz_forme,prezime_iz_forme,tip_iz_forme,email_iz_forme,adresa_organizacije_iz_forme,ime_organizacije_iz_forme,id_organizacije_iz_forme,telefon_iz_forme,slika_iz_forme){
    const podaci={
      id:id_iz_forme,
      ime:ime_iz_forme,
      prezime:prezime_iz_forme,
      korisnicko_ime:korisnicko_ime_iz_forme,
      lozinka:lozinka_iz_forme,
      telefon:telefon_iz_forme,
      tip:tip_iz_forme,
      email:email_iz_forme,
      ime_organizacije:ime_organizacije_iz_forme,
      adresa_organizacije:adresa_organizacije_iz_forme,
      id_organizacije:id_organizacije_iz_forme,
      slika:slika_iz_forme


    }
   
    return this.http.post(`${this.url}/dodajNovi`,podaci)

  }
  dohvatiSve(){
    
    return this.http.get(`${this.url}/dohvatiSve`)
  }
  prihvati(z:Zahtev,i){
    const pod={
      id_zah:z.id,
      ime:z.ime,
      email:z.email,
      adresa_organizacije:z.adresa_organizacije,
      id_organizacije:z.id_organizacije,
      prezime:z.prezime,
      korisnicko_ime:z.korisnicko_ime,
      slika:z.slika,
      telefon:z.telefon,
      id:i,
      tip:z.tip,
      ime_organizacije:z.ime_organizacije

    }
    return this.http.post(`${this.url}/prihvati`,pod)
  }
  odbij(i){
    alert(i)
    const pod={
      id:i
    }
    return this.http.post(`${this.url}/odbij`,pod)
  }
}
