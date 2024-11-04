import express from 'express'; // Uvoz Express biblioteke za rad sa HTTP rutama
import { KorisnikKontroler } from '../Kontroleri/Korisnik.kontroler'; // Uvoz kontrolera za korisnike

const KorisnikRuter = express.Router(); // Kreiranje Express rutera za rute povezane sa korisnikom

// Ruta za registraciju korisnika
KorisnikRuter.route('/registracija').post((req, res) => {
    new KorisnikKontroler().registracija(req, res);
});

// Ruta za logovanje korisnika
KorisnikRuter.route('/logovanje').post((req, res) => {
    new KorisnikKontroler().logovanje(req, res);
});

// Ruta za promenu lozinke korisnika
KorisnikRuter.route('/promenaLozinke').post((req, res) => {
    new KorisnikKontroler().promenaLozinke(req, res);
});

// Ruta za dohvatanje svih korisnika
KorisnikRuter.route('/dohvatiSve').get((req, res) => {
    new KorisnikKontroler().dohvatiSve(req, res);
});

// Ruta za dohvatanje svih učesnika i organizatora
KorisnikRuter.route('/dohvatiSveUcesnikeIOrganizatore').get((req, res) => {
    new KorisnikKontroler().dohvatiSveUcesnikeIOrganizatore(req, res);
});

// Ruta za brisanje korisnika
KorisnikRuter.route('/obrisi').post((req, res) => {
    new KorisnikKontroler().obrisi(req, res);
});

// Ruta za dohvatanje jednog korisnika na osnovu kriterijuma
KorisnikRuter.route('/dohvati').post((req, res) => {
    new KorisnikKontroler().dohvati(req, res);
});

// Ruta za dohvatanje korisnika vezanih za određenu radionicu
KorisnikRuter.route('/dohvatiZaRadionicu').post((req, res) => {
    new KorisnikKontroler().dohvatiZaRadionicu(req, res);
});

// Ruta za promenu podataka korisnika
KorisnikRuter.route('/promeniPodatke').post((req, res) => {
    new KorisnikKontroler().promeniPodatke(req, res);
});

// Izvoz rutera za korišćenje u glavnom delu aplikacije
export default KorisnikRuter;
