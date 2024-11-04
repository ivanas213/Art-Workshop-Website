import express from 'express'; // Uvoz Express biblioteke za kreiranje HTTP ruta
import { PorukaKontroler } from '../Kontroleri/Poruka.kontroler'; // Uvoz kontrolera za poruke

const PorukaRuter = express.Router(); // Kreiranje rutera za rute vezane za poruke

// Ruta za dohvatanje svih poruka
PorukaRuter.route("/dohvatiSve").post((req, res) => {
    new PorukaKontroler().dohvatiSve(req, res);
});

// Ruta za dodavanje nove poruke
PorukaRuter.route("/dodaj").post((req, res) => {
    new PorukaKontroler().dodaj(req, res);
});

// Izvoz rutera za korišćenje u glavnom delu aplikacije
export default PorukaRuter;
