import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DodajSlikuComponent } from '../dodaj-sliku/dodaj-sliku.component';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../modeli/Korisnik';
import { Zahtev } from '../modeli/Zahtev';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent {
  constructor(private dialog:MatDialog,private zahtevServis:ZahtevService,private ruter:Router,private kservis:KorisnikService) { }
  
  
  ngOnInit(): void {
    this.tip="ucesnik"
    this.zahtevServis.dohvatiSve().subscribe((zah:Zahtev[])=>{
      this.zahtevi=zah
      this.zahtevi.forEach(element => {
        if(element.id>this.sledId && element.id!=null) this.sledId=element.id

      });
      this.sledId++
    })
    this.kservis.dohvatiSve().subscribe((kor:Korisnik[])=>{
        this.korisnici=kor
    })
  }
  korisnici:Korisnik[]
  zahtevi:Zahtev[]
  sledId:number=0
  organizator:boolean
  slika:String
  potvrdi_sliku:Boolean
  telefon:String
  email:String
  adresa_organizacije:String
  naziv_organizacije:String
  id_organizacije:String
  korisnicko_ime:String
  lozinka:String
  ime:String
  prezime:String
  tip:String
  potvrda_lozinke:String
  greska:String
  greska2:String
  sirina:number
  visina:number
  flag:Boolean=false
  flag2:Boolean=false
  lose_dimenzije_greska:String=null
  lozinka_greska:String=null
  dodajSliku(){
    let dialogRef = this.dialog.open(DodajSlikuComponent);
   
    dialogRef.afterClosed().subscribe(() => {
      this.slika=dialogRef.componentInstance.url
      this.sirina=dialogRef.componentInstance.width
      this.visina=dialogRef.componentInstance.height
      if(this.visina>300 || this.sirina>300 || this.visina<100  || this.sirina<100) this.lose_dimenzije_greska="Slika nije u odgovarajucem formatu!"
      else this.lose_dimenzije_greska=null
    });
  }
  provera_lozinke():boolean{
    if (this.lozinka.length<8) {
      this.lozinka_greska="Lozinka ne sme sadrzati manje od 8 karaktera"
      return false
    } 
    if (this.lozinka.length>12) {
      this.lozinka_greska="Lozinka ne sme sadrzati vise od 16 karaktera"
      return false
    }
    if(!this.lozinka.match(/[A-Z]/)){

      this.lozinka_greska="Lozinka mora sadrzati bar jedno veliko slovo"
      return false
    }
    if(!this.lozinka.match(/[a-z]/)){

      this.lozinka_greska="Lozinka mora sadrzati bar jedno malo slovo"
      return false
    }
    if(!this.lozinka.match(/[0-9]/)){
      this.lozinka_greska="Lozinka mora sadrzati bar jedan broj"
      return false
    }
    if(!this.lozinka.match(/[!\@\?\#\$\%\^\&\*\(\)\_\+\=\-\<\>\,\.\(\)\|\/]/)){
      this.lozinka_greska="Lozinka mora sadrzati bar jedan specijalni karakter"
      return false
    }
    if(!this.lozinka.charAt(0).match(/[a-z]/)){
      this.lozinka_greska="Lozinka mora pocinjati slovom"
      return false
    }
    this.lozinka_greska=null
    return true

  }
  provera_praznih_polja():boolean{
    if(this.korisnicko_ime==null || this.korisnicko_ime=="" || this.lozinka==null || this.lozinka=="" || this.ime==null || this.ime=="" || this.prezime==null ||this.prezime=="" || this.telefon==null || this.telefon=="" || this.email==null || this.email=="") return false
    if(this.tip=="organizator" && (this.adresa_organizacije==null || this.adresa_organizacije=="" || this.id_organizacije==null || this.id_organizacije=="" || this.naziv_organizacije==null || this.naziv_organizacije=="")) return false
    return true
  }
  registracija(){
    this.greska=null
    this.greska2=null
    if(!this.provera_praznih_polja()) this.greska="Popunite sva polja!"
    else{
      if(this.provera_lozinke()){
        if(this.lose_dimenzije_greska==null){
          if(this.potvrda_lozinke!=this.lozinka) this.greska="Niste ispravno potvrdili lozinku!"
        else{
          this.korisnici.forEach((k)=>{
            if(k.korisnicko_ime==this.korisnicko_ime){
              this.greska="Korisnicko ime vec postoji u sistemu!"
              this.flag=true
            } 
            if(k.email==this.email){
              this.greska2="Email adresa vec postoji u sistemu!"
              this.flag2=true
            } 
          })
          if(!this.flag && !this.flag2){
            if(this.organizator) {
              this.tip="organizator" 
        
            }
             else {
               this.tip="ucesnik"
               this.adresa_organizacije=null
               this.naziv_organizacije=null
               this.id_organizacije=null
             }
               if(this.potvrdi_sliku==false) this.slika=null
            this.zahtevServis.dodajNovi(this.sledId,this.korisnicko_ime,this.lozinka,this.ime,this.prezime,this.tip,this.email,this.adresa_organizacije,this.naziv_organizacije,this.id_organizacije,this.telefon,this.slika).subscribe(res=>{
            
                this.ruter.navigate([''])
            })
          }
          else{
            this.flag=false
            this.flag2=false
            
          }
         
        }
        }
      }
      
    }
    
    
    
  }
}
