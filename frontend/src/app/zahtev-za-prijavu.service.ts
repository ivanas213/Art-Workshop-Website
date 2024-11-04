import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ZahtevZaPrijavuService {

  constructor(private http:HttpClient) { }
  url='http://localhost:4000/zahtevZaPrijavu'

  dodajNovi(i,id_kor,id_rad){
    const podaci={
      id:i,
      idKorisnika:id_kor,
      idRadionice:id_rad,
      status:"nov"
    }
   
    return this.http.post(`${this.url}/dodajNovi`,podaci)

  }
  dohvatiSve(){
    
    return this.http.get(`${this.url}/dohvatiSve`)
  }
  dohvatiSveZaRadionicu(idRad){
    const podaci={
      idRadionice:idRad
    }
    return this.http.post(`${this.url}/dohvatiSveZaRadionicu`,podaci)
  }
  prihvati(i,idRad,idKor){
    alert(idKor)
    const podaci={
      id:i,
      idRadionice:idRad,
      idKorisnika:idKor
    }
    return this.http.post(`${this.url}/prihvati`,podaci)
  }
  odbij(i){
    const podaci={
      id:i
    }
    return this.http.post(`${this.url}/odbij`,podaci)
  }
  
}
