import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KorisnikService } from '../korisnik.service';
import { Korisnik } from '../modeli/Korisnik';

@Component({
  selector: 'app-admin-logovanje', 
  templateUrl: './admin-logovanje.component.html',  
  styleUrls: ['./admin-logovanje.component.css']  
})
export class AdminLogovanjeComponent implements OnInit {

  constructor(private kservis: KorisnikService, private ruter: Router) { }

  ngOnInit(): void {
    // Funkcija koja se poziva prilikom inicijalizacije komponente
  }

  korisnicko_ime: String;  // Varijabla za korisničko ime
  lozinka: String;  // Varijabla za lozinku
  greska: String;  // Varijabla za prikaz greške
  nema_korisnickog_imena: boolean;  // Provera za prazno korisničko ime
  nema_lozinke: boolean;  // Provera za praznu lozinku

  logovanje() {
    this.greska = null;  // Resetovanje poruke o grešci
    this.nema_korisnickog_imena = false;  // Resetovanje provere korisničkog imena
    this.nema_lozinke = false;  // Resetovanje provere lozinke

    // Provera da li su polja korisničko ime i lozinka prazna
    if (this.lozinka == null || this.lozinka == "") this.nema_lozinke = true;
    if (this.korisnicko_ime == null || this.korisnicko_ime == "") this.nema_korisnickog_imena = true;

    // Ako su polja prazna, prikazuje poruku o grešci
    if (this.nema_korisnickog_imena || this.nema_lozinke) {
      this.greska = "Popunite sva polja!!";
    } else {
      // Pozivanje servisa za logovanje i čuvanje korisnika u lokalnom skladištu ako je uspesno
      this.kservis.logovanje(this.korisnicko_ime, this.lozinka).subscribe((k: Korisnik) => {
        localStorage.setItem('ulogovan', JSON.stringify(k));
        if (k) {
          // Provera tipa korisnika
          switch (k.tip) {
            case 'administrator': this.ruter.navigate(['admin']);  // Navigacija na admin stranicu
                                  break;
            default: this.greska = "Niste admin!";  // Poruka ako korisnik nije admin
          }
        } else {
          this.greska = "Unesite ispravne podatke za logovanje!";  // Greška ako podaci nisu validni
        }
      });
    }
  }
}
