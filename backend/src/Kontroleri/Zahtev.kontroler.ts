import express from 'express'
import Zahtev from '../Modeli/Zahtev'
import Korisnik from '../Modeli/Korisnik'

// Definisanje klase ZahtevKontroler koja sadrži metode za rukovanje zahtevima
export class ZahtevKontroler {

    // Metod dodajNovi: kreira novi zahtev i postavlja status na "nov"
    dodajNovi = (req: express.Request, res: express.Response) => {
        let zah = new Zahtev(req.body) // Kreiranje novog Zahtev objekta sa podacima iz tela zahteva
        zah.status = "nov" // Postavljanje statusa zahteva na "nov"
        
        // Čuvanje zahteva u bazi
        zah.save((err, resp) => {
            if (err) console.log(err)
            else res.json({ 'message': 'Korisnik je dodat u bazu' }) // Odgovor na uspešno čuvanje zahteva
        })
    }

    // Metod dohvatiSve: dohvaća sve zahteve iz baze
    dohvatiSve = (req: express.Request, res: express.Response) => {
        Zahtev.find({}, (err, zahtevi) => { // Pronalazi sve dokumente u kolekciji Zahtev
            if (err) console.log(err)
            else res.json(zahtevi) // Vraća listu svih zahteva kao JSON odgovor
        })
    }

    // Metod prihvati: prihvata zahtev i kreira novog korisnika na osnovu podataka u telu zahteva
    prihvati = (req: express.Request, res: express.Response) => {
        let id_zah = req.body.id_zah // ID zahteva koji treba prihvatiti
        let korisnik = new Korisnik() // Kreiranje novog Korisnik objekta

        // Postavljanje podataka za novog korisnika na osnovu zahteva
        korisnik.id = req.body.id
        korisnik.ime = req.body.ime
        korisnik.prezime = req.body.prezime
        korisnik.korisnicko_ime = req.body.korisnicko_ime
        korisnik.lozinka = req.body.lozinka
        korisnik.tip = req.body.tip
        korisnik.telefon = req.body.telefon
        korisnik.email = req.body.email
        korisnik.slika = req.body.slika
        korisnik.radionice = new Array // Inicijalizacija praznih nizova za radionice
        korisnik.prijavljene_radionice = new Array

        // Dodatni podaci za organizatora
        if (req.body.tip == "organizator") {
            korisnik.ime_organizacije = req.body.ime_organizacije
            korisnik.adresa_organizacije = req.body.adresa_organizacije
            korisnik.id_organizacije = req.body.id_organizacije
        }

        // Ažuriranje statusa zahteva na "prihvacen" u kolekciji Zahtev
        Zahtev.updateOne({ 'id': id_zah }, { 'status': 'prihvacen' }, (err, resp) => {
            if (err) console.log(err)
        })

        // Čuvanje novog korisnika u bazi
        korisnik.save((err, r) => {
            if (err) console.log(err)
            else res.json({ 'poruka': 'Zahtev je prihvacen i korisnik je dodat!' }) // Odgovor na uspešno dodavanje korisnika
        })
    }

    // Metod odbij: odbija zahtev i ažurira njegov status na "odbijen"
    odbij = (req: express.Request, res: express.Response) => {
        let id = req.body.id // ID zahteva koji treba odbiti
        
        // Ažuriranje statusa zahteva na "odbijen" u kolekciji Zahtev
        Zahtev.updateOne({ 'id': id }, { 'status': 'odbijen' }, (err, resp) => {
            if (err) console.log(err)
            else res.json({ 'poruka': 'Zahtev je odbijen' }) // Odgovor na uspešno odbijanje zahteva
        })
    }
}
