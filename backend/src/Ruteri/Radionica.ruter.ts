import express from 'express'; // Uvoz Express biblioteke za rad sa HTTP rutama
import { RadionicaKontroler } from '../Kontroleri/Radionica.kontroler'; // Uvoz kontrolera za rad sa radionicama

const RadionicaRuter = express.Router(); // Kreiranje novog rutera za rute povezane sa radionicama

// Ruta za dohvatanje svih radionica
RadionicaRuter.route('/dohvatiSve').get((req, res) => {
    new RadionicaKontroler().dohvatiSve(req, res);
});

// Ruta za pronalaženje radionica
RadionicaRuter.route('/pronadji').post((req, res) => {
    new RadionicaKontroler().pronadji(req, res);
});

// Ruta za dohvatanje specifične radionice na osnovu odredjenog kriterijuma
RadionicaRuter.route('/dohvati').post((req, res) => {
    new RadionicaKontroler().dohvati(req, res);
});

// Ruta za izmenu podataka radionice
RadionicaRuter.route('/izmeni').post((req, res) => {
    new RadionicaKontroler().izmeni(req, res);
});

// Ruta za otkazivanje radionice
RadionicaRuter.route('/otkazi').post((req, res) => {
    new RadionicaKontroler().otkazi(req, res);
});

// Ruta za dodavanje nove radionice
RadionicaRuter.route('/dodajNovu').post((req, res) => {
    new RadionicaKontroler().dodajNovu(req, res);
});

// Ruta za brisanje radionice
RadionicaRuter.route('/obrisi').post((req, res) => {
    new RadionicaKontroler().obrisi(req, res);
});

// Ruta za prihvatanje prijave na radionicu
RadionicaRuter.route('/prihvati').post((req, res) => {
    new RadionicaKontroler().prihvati(req, res);
});

// Ruta za odbijanje prijave na radionicu
RadionicaRuter.route('/odbij').post((req, res) => {
    new RadionicaKontroler().odbij(req, res);
});

// Izvoz rutera za korišćenje u glavnom delu aplikacije
export default RadionicaRuter;
