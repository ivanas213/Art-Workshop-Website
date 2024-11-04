import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../modeli/Korisnik';

@Component({
  selector: 'app-logovanje',
  templateUrl: './logovanje.component.html',
  styleUrls: ['./logovanje.component.css']
})
export class LogovanjeComponent implements OnInit {

  constructor(private kservis:KorisnikService, private ruter:Router) { }
  greska:String
  nema_korisnickog_imena:boolean
  nema_lozinke:boolean
  lozinka:String
  korisnicko_ime:String
  

  ngOnInit(): void {
  }
  logovanje(){
    this.greska=null
    this.nema_korisnickog_imena=false
    this.nema_lozinke=false
    if(this.lozinka==null || this.lozinka=="") this.nema_lozinke=true
    if(this.korisnicko_ime==null || this.korisnicko_ime=="") this.nema_korisnickog_imena=true
    if(this.nema_korisnickog_imena || this.nema_lozinke)
     {
      this.greska="Popunite sva polja!!"
     }
    else{
     
      this.kservis.logovanje(this.korisnicko_ime,this.lozinka).subscribe((k:Korisnik)=>{
        localStorage.setItem('ulogovan',JSON.stringify(k))
        if(k) {
          this.ruter.navigate([''])
          /*
          switch(k.tip){
            case 'ucesnik':this.ruter.navigate(['ucesnik'])
                          break
            case 'administrator':this.ruter.navigate(['admin'])
                          break
            case 'organizator':this.ruter.navigate(['organizator'])
                          break
          }*/
        }
        else this.greska="Unesite ispravne podatke za logovanje!"
      })
    }
  }

}
