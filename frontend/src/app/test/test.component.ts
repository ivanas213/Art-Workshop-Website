import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DodajSlikuComponent } from '../dodaj-sliku/dodaj-sliku.component';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../modeli/Korisnik';
import { Radionica } from '../modeli/Radionica';
import { Zahtev } from '../modeli/Zahtev';
import { RadionicaService } from '../radionica.service';
import { ZahtevService } from '../zahtev.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  
  constructor(private kservis:KorisnikService,private ruter:Router,private dialog:MatDialog, private rservis:RadionicaService) { }

  ngOnInit(): void {
    this.pret=false
    this.radionice=[]
    let naziv:string=JSON.parse(localStorage.getItem('pretraga_naziv'))
    let mesto:string=JSON.parse(localStorage.getItem('pretraga_mesto'))
    let rad:Radionica[]=[]
    this.rservis.dohvatiSve().subscribe((r:Radionica[])=>{
      rad=r
      if((naziv==null || naziv=="") && (mesto==null || mesto=="") ) {
        this.radionice=rad
        
      }
      else if((naziv!=null && naziv!="") && (mesto!=null && mesto!="")   ) rad.forEach((r)=>{
        if(r.naziv.toLowerCase().includes(naziv.toLowerCase()) && r.mesto.toLowerCase().includes(mesto.toLowerCase())) this.radionice.push(r)
      })
      else if(naziv!=null && naziv!="") {
        rad.forEach((r)=>{
        if(r.naziv.toLowerCase().includes(naziv.toLowerCase()) ) this.radionice.push(r)
      })
      }
      else if(mesto!=null && mesto!="") {
        rad.forEach((r)=>{
        if(r.mesto.toLowerCase().includes(mesto.toLowerCase())) this.radionice.push(r)
      })
      }
      if(this.radionice.length>0) this.pret=true
      localStorage.setItem('pretraga_naziv',null)
      localStorage.setItem('pretraga_mesto',null)

    }
    )
  }
  pret:boolean=false
  korisnicko_ime:String
  lozinka:String
  greska:String
  nema_korisnickog_imena:boolean
  nema_lozinke:boolean
  radionice:Radionica[]
  pretrazene:Radionica[]=[]
  pretraga_mesto:String=null
  pretraga_naziv:String=null
  pretraga_izabrana:boolean=false
 
  logovanje(){
    this.greska=null
    this.nema_korisnickog_imena=false
    this.nema_lozinke=false
    if(this.lozinka==null || this.lozinka=="") this.nema_lozinke=true
    if(this.korisnicko_ime==null || this.korisnicko_ime=="") this.nema_korisnickog_imena=true
    if(this.nema_korisnickog_imena || this.nema_lozinke) {}
    else{
     
      this.kservis.logovanje(this.korisnicko_ime,this.lozinka).subscribe((k:Korisnik)=>{
        localStorage.setItem('ulogovan',JSON.stringify(k))
        if(k) {
          switch(k.tip){
            case 'ucesnik':this.ruter.navigate(['ucesnik'])
                          break
            case 'administrator':this.ruter.navigate(['admin'])
                          break
            case 'organizator':this.ruter.navigate(['organizator'])
                          break
          }
        }
        else this.greska="Unesite ispravne podatke za logovanje!"
      })
    }
  }
  registracija(){
    const dialogConfig=new MatDialogConfig()
    dialogConfig.disableClose=true
    dialogConfig.autoFocus=true
    this.dialog.open(TestComponent)
    
  }
  pretraga(){
    if(this.pretraga_mesto!=null && this.pretraga_mesto!="") localStorage.setItem('pretraga_mesto',JSON.stringify(this.pretraga_mesto))
    if(this.pretraga_naziv!=null && this.pretraga_naziv!="") localStorage.setItem('pretraga_naziv',JSON.stringify(this.pretraga_naziv))
    window.location.reload()
  }
  sortiraj_prema_nazivu(){
    this.radionice.sort((r1,r2)=>{
      if(r1.naziv>r2.naziv) return 1
      if(r1.naziv==r2.naziv) return 0
      return -1
    })
  }
  sortiraj_prema_datumu(){
    this.radionice.sort((r1,r2)=>{
      if(r1.datum>r2.datum) return 1
      if(r1.datum==r2.datum) return 0
      return -1
    })
  }
  
}
