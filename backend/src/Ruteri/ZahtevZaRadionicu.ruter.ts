import express from 'express'; // Uvoz Express biblioteke za kreiranje HTTP ruta
import { ZahtevZaRadionicuKontroler } from '../Kontroleri/ZahtevZaRadionicu.kontroler'; // Uvoz kontrolera za rukovanje zahtevima za radionice

const ZahtevZaRadionicuRuter = express.Router(); // Kreiranje novog rutera za rute povezane sa zahtevima za radionice

// Ruta za dodavanje novog zahteva za radionicu
ZahtevZaRadionicuRuter.route('/dodajNovi').post((req, res) => {
    new ZahtevZaRadionicuKontroler().dodajNovi(req, res);
});

// Ruta za dohvatanje svih zahteva za radionice
ZahtevZaRadionicuRuter.route('/dohvatiSve').get((req, res) => {
    new ZahtevZaRadionicuKontroler().dohvatiSve(req, res);
});

// Izvoz za upotrebu u glavnom delu aplikacije
export default ZahtevZaRadionicuRuter;
