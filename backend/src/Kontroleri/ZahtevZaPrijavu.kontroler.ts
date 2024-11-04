import express from 'express'
import Korisnik from '../Modeli/Korisnik'
import Radionica from '../Modeli/Radionica'
import ZahtevZaPrijavu from '../Modeli/ZahtevZaPrijavu'

// Definisanje kontrolera za rukovanje zahtevima za prijavu na radionice
export class ZahtevZaPrijavuKontroler {

    // Metod dodajNovi: dodaje novi zahtev za prijavu na radionicu i smanjuje broj slobodnih mesta
    dodajNovi = (req: express.Request, res: express.Response) => {
        let zah = new ZahtevZaPrijavu(req.body) // Kreiranje novog ZahtevZaPrijavu objekta sa podacima iz tela zahteva
        let idRadionice = req.body.idRadionice // ID radionice za prijavu
        zah.status = "nov" // Postavljanje početnog statusa zahteva

        // Čuvanje zahteva u bazi
        zah.save((err, resp) => {
            if (err) console.log(err)
        })

        // Ažuriranje broja slobodnih mesta za radionicu, smanjenje za 1
        Radionica.updateOne({ "id": idRadionice }, { $inc: { "slobodna_mesta": -1 } }, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp) // Odgovor na uspešno ažuriranje broja slobodnih mesta
        })
    }

    // Metod dohvatiSve: dohvaća sve zahteve za prijavu iz baze
    dohvatiSve = (req: express.Request, res: express.Response) => {
        ZahtevZaPrijavu.find({}, (err, zahtevi) => { // Pronalazi sve dokumente u kolekciji ZahtevZaPrijavu
            if (err) console.log(err)
            else res.json(zahtevi) // Vraća listu svih zahteva kao JSON odgovor
        })
    }

    // Metod dohvatiSveZaRadionicu: dohvaća sve zahteve za prijavu za određenu radionicu
    dohvatiSveZaRadionicu = (req: express.Request, res: express.Response) => {
        let idRadionice = req.body.idRadionice // ID radionice za filtriranje zahteva
        ZahtevZaPrijavu.find({ "idRadionice": idRadionice }, (err, zahtevi) => { // Pronalazi sve zahteve za datu radionicu
            if (err) console.log(err)
            else res.json(zahtevi) // Vraća listu zahteva za tu radionicu kao JSON odgovor
        })
    }

    // Metod prihvati: prihvata zahtev za prijavu, dodaje radionicu korisniku i ažurira status zahteva
    prihvati = (req: express.Request, res: express.Response) => {
        let id = req.body.id // ID zahteva za prijavu koji treba prihvatiti
        let idRadionice = req.body.idRadionice // ID radionice
        let idKorisnika = req.body.idKorisnika // ID korisnika koji se prijavljuje

        // Dodavanje ID-a radionice u niz prijavljenih radionica korisnika
        Korisnik.updateOne({ 'id': idKorisnika }, { $push: { "prijavljene_radionice": idRadionice } }, (err, resp) => {
            if (err) console.log(err)
        })

        // Ažuriranje statusa zahteva za prijavu na "prihvacen"
        ZahtevZaPrijavu.updateOne({ "id": id }, { 'status': 'prihvacen' }, (err, zahtevi) => {
            if (err) console.log(err)
            else res.json(zahtevi) // Odgovor na uspešno ažuriranje statusa zahteva
        })
    }

    // Metod odbij: odbija zahtev za prijavu i ažurira status na "odbijen"
    odbij = (req: express.Request, res: express.Response) => {
        let id = req.body.id // ID zahteva za prijavu koji treba odbiti

        // Ažuriranje statusa zahteva za prijavu na "odbijen"
        ZahtevZaPrijavu.updateOne({ "id": id }, { 'status': 'odbijen' }, (err, zahtevi) => {
            if (err) console.log(err)
            else res.json(zahtevi) // Odgovor na uspešno odbijanje zahteva
        })
    }
}
