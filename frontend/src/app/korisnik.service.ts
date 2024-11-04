import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/korisnik'
  logovanje(korisnicko_ime_iz_forme,lozinka_iz_forme){
    const podaci={
      korisnicko_ime:korisnicko_ime_iz_forme,
      lozinka:lozinka_iz_forme
    }
    return this.http.post(`${this.url}/logovanje`,podaci)
  }
  registracija(id_iz_forme,korisnicko_ime_iz_forme,lozinka_iz_forme,ime_iz_forme,prezime_iz_forme,tip_iz_forme,email_iz_forme,adresa_organizacije_iz_forme,ime_organizacije_iz_forme,id_organizacije_iz_forme,telefon_iz_forme,slika_iz_forme){
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
   
    return this.http.post(`${this.url}/registracija`,podaci)

  }
  promenaLozinke(korisnicko_ime_iz_forme,lozinka_iz_forme){
    const podaci={
      korisnicko_ime:korisnicko_ime_iz_forme,
      lozinka:lozinka_iz_forme
    }
    return this.http.post(`${this.url}/promenaLozinke`,podaci)
  }
  dohvatiSve(){
    
    return this.http.get(`${this.url}/dohvatiSve`)
  }
  dohvatiSveUcesnikeIOrganizatore(){
    return this.http.get(`${this.url}/dohvatiSveUcesnikeIOrganizatore`)

    
  }
  obrisi(i){
    const pod={
      id:i
    }
    return this.http.post(`${this.url}/obrisi`,pod)

    
  }
  promeniPodatke(id_iz_forme,korisnicko_ime_iz_forme,lozinka_iz_forme,ime_iz_forme,prezime_iz_forme,tip_iz_forme,email_iz_forme,adresa_organizacije_iz_forme,ime_organizacije_iz_forme,id_organizacije_iz_forme,telefon_iz_forme,slika_iz_forme){
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
   
    return this.http.post(`${this.url}/promeniPodatke`,podaci)

  }
  dohvati(id_iz_forme){
    const podaci={
      id:id_iz_forme
    }
    return this.http.post(`${this.url}/dohvati`,podaci)
  }
  dohvatiZaRadionicu(idR){
    const podaci={
      idRad:idR
    }
    return this.http.post(`${this.url}/dohvatiZaRadionicu`,podaci)
  }
}
