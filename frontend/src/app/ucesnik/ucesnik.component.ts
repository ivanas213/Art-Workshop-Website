import { Component } from '@angular/core';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../modeli/Korisnik';

@Component({
  selector: 'app-ucesnik',
  templateUrl: './ucesnik.component.html',
  styleUrls: ['./ucesnik.component.css']
})
export class UcesnikComponent {
  constructor(private kservis:KorisnikService) { }

  ngOnInit(): void {
    this.ucesnik=JSON.parse(localStorage.getItem('ulogovan'))

  }
  ucesnik:Korisnik
  novaLozinka:String
  promeniLozinku(){
    this.kservis.promenaLozinke(this.ucesnik.korisnicko_ime,this.novaLozinka).subscribe((resp)=>{
      alert(resp['message'])}
    )
    
  }
}
