import express from 'express'; // Uvoz Express biblioteke za kreiranje HTTP ruta
import { ZahtevZaPrijavuKontroler } from '../Kontroleri/ZahtevZaPrijavu.kontroler'; // Uvoz kontrolera za upravljanje zahtevima za prijavu

const ZahtevZaPrijavuRuter = express.Router(); // Kreiranje novog rutera za rute vezane za zahteve za prijavu

// Ruta za dodavanje novog zahteva za prijavu
ZahtevZaPrijavuRuter.route('/dodajNovi').post((req, res) => {
    new ZahtevZaPrijavuKontroler().dodajNovi(req, res);
});

// Ruta za dohvatanje svih zahteva za prijavu
ZahtevZaPrijavuRuter.route('/dohvatiSve').get((req, res) => {
    new ZahtevZaPrijavuKontroler().dohvatiSve(req, res);
});

// Ruta za dohvatanje svih zahteva za određenu radionicu
ZahtevZaPrijavuRuter.route('/dohvatiSveZaRadionicu').post((req, res) => {
    new ZahtevZaPrijavuKontroler().dohvatiSveZaRadionicu(req, res);
});

// Ruta za prihvatanje zahteva za prijavu
ZahtevZaPrijavuRuter.route('/prihvati').post((req, res) => {
    new ZahtevZaPrijavuKontroler().prihvati(req, res);
});

// Ruta za odbijanje zahteva za prijavu
ZahtevZaPrijavuRuter.route('/odbij').post((req, res) => {
    new ZahtevZaPrijavuKontroler().odbij(req, res);
});

// Izvoz rutera za korišćenje u glavnom delu aplikacije
export default ZahtevZaPrijavuRuter;
