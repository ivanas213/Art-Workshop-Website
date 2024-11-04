import express from 'express'
import Poruka from '../Modeli/Poruka'

// Klasa kontrolera za poruke, koja definiše metode za rad sa porukama u bazi
export class PorukaKontroler {

    // Metoda za dohvat svih poruka vezanih za određenog korisnika i radionicu
    dohvatiSve = (req: express.Request, res: express.Response) => {
        let korisnik = req.body.korisnik // Preuzima korisnika iz tela zahteva
        let radionica = req.body.radionica // Preuzima radionicu iz tela zahteva

        // Pronalazi poruke u bazi koje odgovaraju korisniku i radionici
        Poruka.find({ "korisnik": korisnik, "radionica": radionica }, (err, por) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json(por) // Vraća sve pronađene poruke
        })
    }

    // Metoda za dodavanje nove poruke
    dodaj = (req: express.Request, res: express.Response) => {
        let poruka = new Poruka(req.body) // Kreira novu poruku sa podacima iz tela zahteva

        // Čuva poruku u bazi
        poruka.save((err, resp) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json(resp) // Vraća sačuvanu poruku kao odgovor
        })
    }
}
