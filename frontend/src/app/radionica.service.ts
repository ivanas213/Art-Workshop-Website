import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadionicaService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/radionica'
  pretrazi(ime_iz_forme,mesto_iz_forme){
    const podaci={
      ime:ime_iz_forme,
      mesto:mesto_iz_forme
    }
    return this.http.post(`${this.url}/pronadji`,podaci)

  }
  dohvatiSve(){
    return this.http.get(`${this.url}/dohvatiSve`)
  }
  dohvati(i){
    const pod={
      id:i
    }
    return this.http.post(`${this.url}/dohvati`,pod)
  }
  izmeni(i,sl,naz,dat,mes,op,sv,kom,dop,sm,org,ga){
    const pod={
      id:i,
      slika:sl,
      naziv:naz,
      datum:dat,
      mesto:mes,
      opis:op,
      komentari:kom,
      duzi_opis:dop,
      slobodna_mesta:sm,
      organizator:org,
      galerija:ga,
      svidjanja:sv
    }
    return this.http.post(`${this.url}/izmeni`,pod)
  }
  otkazi(kor,rad,ni){
    const podaci={
      idKor:kor,
      idRad:rad,
      niz:ni
    }
    return this.http.post(`${this.url}/otkazi`,podaci)
  }
  
  dodajNovu(i,sl,naz,dat,mes,op,sv,kom,dop,sm,org,ga){
    const pod={
      id:i,
      slika:sl,
      naziv:naz,
      datum:dat,
      mesto:mes,
      opis:op,
      komentari:kom,
      duzi_opis:dop,
      slobodna_mesta:sm,
      organizator:org,
      galerija:ga,
      svidjanja:sv
    }
    return this.http.post(`${this.url}/dodajNovu`,pod)
  }
  prihvati(idz,i,sl,naz,dat,mes,op,sv,kom,dop,sm,org,ga){
    const pod={
      id_zah:idz,
      id:i,
      slika:sl,
      naziv:naz,
      datum:dat,
      mesto:mes,
      opis:op,
      komentari:kom,
      duzi_opis:dop,
      slobodna_mesta:sm,
      organizator:org,
      galerija:ga,
      svidjanja:sv
    }
    return this.http.post(`${this.url}/prihvati`,pod)

  }
  odbij(idz){
    const pod={
      id_zah:idz
    }
    return this.http.post(`${this.url}/odbij`,pod)

  }
}
