import express from 'express'; // Uvoz Express biblioteke za rad sa HTTP rutama
import { ZahtevKontroler } from '../Kontroleri/Zahtev.kontroler'; // Uvoz kontrolera za rad sa zahtevima

const ZahtevRuter = express.Router(); // Kreiranje novog rutera za rute povezane sa zahtevima

// Ruta za dodavanje novog zahteva
ZahtevRuter.route('/dodajNovi').post((req, res) => {
    new ZahtevKontroler().dodajNovi(req, res);
});

// Ruta za prihvatanje zahteva
ZahtevRuter.route('/prihvati').post((req, res) => {
    new ZahtevKontroler().prihvati(req, res);
});

// Ruta za odbijanje zahteva
ZahtevRuter.route('/odbij').post((req, res) => {
    new ZahtevKontroler().odbij(req, res);
});

// Ruta za dohvatanje svih zahteva
ZahtevRuter.route('/dohvatiSve').get((req, res) => {
    new ZahtevKontroler().dohvatiSve(req, res);
});

// Izvoz rutera za korišćenje u glavnom delu aplikacije
export default ZahtevRuter;
