import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../modeli/Korisnik';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private kservis: KorisnikService, private ruter: Router) { }

  ngOnInit(): void {
  }

  korisnicko_ime: String;
  lozinka: String;
  greska: String;
  nema_korisnickog_imena: boolean;
  nema_lozinke: boolean;
  nije_admin: boolean;

  logovanje() {
    // Resetujemo grešku i flagove na početku funkcije
    this.greska = null;
    this.nema_korisnickog_imena = false;
    this.nema_lozinke = false;

    // Proveravamo da li su sva potrebna polja popunjena
    if (this.lozinka == null || this.lozinka == "") this.nema_lozinke = true;
    if (this.korisnicko_ime == null || this.korisnicko_ime == "") this.nema_korisnickog_imena = true;

    // Ako bilo koje polje nedostaje, postavljamo poruku greške
    if (this.nema_korisnickog_imena || this.nema_lozinke) {
      this.greska = "Popunite sva polja!!";
    } else {
      // Pozivamo servis za logovanje sa korisničkim imenom i lozinkom
      this.kservis.logovanje(this.korisnicko_ime, this.lozinka).subscribe((k: Korisnik) => {
        
        // Čuvamo korisnika u lokalnom skladištu ako je prijava uspešna
        localStorage.setItem('ulogovan', JSON.stringify(k));
        
        if (k) {
          // Ako je korisnik admin, preusmeravamo ga na početnu stranicu
          if (k.tip == "admin")
            this.ruter.navigate(['']);
          else {
            // Prikazujemo poruku greške ako korisnik nije admin
            this.greska = "Niste admin!";
          }
        } else {
          // Prikazujemo poruku greške ako podaci za logovanje nisu ispravni
          this.greska = "Unesite ispravne podatke za logovanje!";
        }
      });
    }
  }
}
