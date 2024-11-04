import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../modeli/Korisnik';

@Component({
  selector: 'app-promena-lozinke',
  templateUrl: './promena-lozinke.component.html',
  styleUrls: ['./promena-lozinke.component.css']
})
export class PromenaLozinkeComponent implements OnInit {

  constructor(private kservis:KorisnikService,private ruter:Router) { }

  ngOnInit(): void {
    this.korisnik=JSON.parse(localStorage.getItem('ulogovan'))

  }
  stara_lozinka:String
  nova_lozinka:String
  nova_lozinka_potvrda:String
  korisnik:Korisnik
  lozinka_greska:String=null
  provera_lozinke():boolean{
    if (this.nova_lozinka.length<8) {
      this.lozinka_greska="Lozinka ne sme sadrzati manje od 8 karaktera!"
      return false
    } 
    if (this.nova_lozinka.length>12) {
      this.lozinka_greska="Lozinka ne sme sadrzati vise od 16 karaktera!"
      return false
    }
    if(!this.nova_lozinka.match(/[A-Z]/)){

      this.lozinka_greska="Lozinka mora sadrzati bar jedno veliko slovo!"
      return false
    }
    if(!this.nova_lozinka.match(/[0-9]/)){
      this.lozinka_greska="Lozinka mora sadrzati bar jedna broj!"
      return false
    }
    if(!this.nova_lozinka.match(/[!\@\?\#\$\%\^\&\*\(\)\_\+\=\-\<\>\,\.\(\)\|\/]/)){
      this.lozinka_greska="Lozinka mora sadrzati bar jedan specijalni karakter!"
      return false
    }
    if(!this.nova_lozinka.charAt(0).match(/[a-z]/)){
      this.lozinka_greska="Lozinka mora pocinjati slovom!"
      return false
    }
    this.lozinka_greska=null
    return true

  }
  promeniLozinku(){
    if(this.stara_lozinka==this.korisnik.lozinka){
      if(this.provera_lozinke()){
        if(this.nova_lozinka==this.nova_lozinka_potvrda){
          this.kservis.promenaLozinke(this.korisnik.korisnicko_ime,this.nova_lozinka).subscribe((resp)=>{
            alert("Lozinka je promenjena!")
            localStorage.clear()
            this.ruter.navigate([''])
          }
          )
        }
        else this.lozinka_greska="Niste ispravno potvrdili novu lozinku!"
        
      }
    }
    else this.lozinka_greska="Niste ispravno uneli staru lozinku!"
   
    
  }
}
