import express from 'express'
import Korisnik from '../Modeli/Korisnik'

// Klasa kontrolera za korisnike koja definiše različite metode za rad sa korisnicima u bazi
export class KorisnikKontroler {

    // Metoda za registraciju novog korisnika
    registracija = (req: express.Request, res: express.Response) => {
        let korisnik = new Korisnik(req.body) // Kreira novog korisnika sa podacima iz tela zahteva
        korisnik.radionice = new Array // Inicijalizuje praznu listu radionica za korisnika
        korisnik.save((err, resp) => { // Čuva korisnika u bazi
            if (err) console.log(err) // Ako postoji greška, ispisuje je u konzolu
            else res.json({ 'message': 'Korisnik je dodat u bazu' }) // Vraća poruku o uspešnoj registraciji
        })
    }

    // Metoda za logovanje korisnika
    logovanje = (req: express.Request, res: express.Response) => {
        let korisnicko_ime = req.body.korisnicko_ime // Preuzima korisničko ime iz tela zahteva
        let lozinka = req.body.lozinka // Preuzima lozinku iz tela zahteva

        // Pronalazi korisnika u bazi na osnovu korisničkog imena i lozinke
        Korisnik.findOne({ 'korisnicko_ime': korisnicko_ime, 'lozinka': lozinka }, (err, kor) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json(kor) // Vraća korisnika ako je pronađen
        })
    }

    // Metoda za promenu lozinke korisnika
    promenaLozinke = (req: express.Request, res: express.Response) => {
        let korisnicko_ime = req.body.korisnicko_ime // Preuzima korisničko ime iz tela zahteva
        let lozinka = req.body.lozinka // Preuzima novu lozinku iz tela zahteva

        // Ažurira lozinku za korisnika sa datim korisničkim imenom
        Korisnik.updateOne({ 'korisnicko_ime': korisnicko_ime }, { 'lozinka': lozinka }, (err, kor) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json({ 'message': 'Lozinka je promenjena' }) // Vraća poruku o uspešnoj promeni lozinke
        })
    }

    // Metoda za dohvatanje svih korisnika
    dohvatiSve = (req: express.Request, res: express.Response) => {
        // Pronalazi sve korisnike u bazi
        Korisnik.find({}, (err, kor) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json(kor) // Vraća sve korisnike kao odgovor
        })
    }

    // Metoda za dohvatanje svih učesnika i organizatora (isključujući admina)
    dohvatiSveUcesnikeIOrganizatore = (req: express.Request, res: express.Response) => {
        // Pronalazi korisnike koji nisu admini
        Korisnik.find({ "tip": { $ne: "admin" } }, (err, kor) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json(kor) // Vraća sve učesnike i organizatore
        })
    }

    // Metoda za promenu podataka korisnika
    promeniPodatke = (req: express.Request, res: express.Response) => {
        let novi = new Korisnik(req.body) // Kreira novi korisnički dokument sa podacima iz zahteva
        let id = req.body.id // Preuzima id korisnika iz zahteva

        // Briše starog korisnika sa istim id-em
        Korisnik.deleteOne({ 'id': id }, (err, resp) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
        })

        // Čuva novog korisnika u bazi
        novi.save((err, resp) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json({ 'message': 'Podaci su ažurirani' }) // Vraća poruku o uspešnom ažuriranju podataka
        })
    }

    // Metoda za brisanje korisnika iz baze
    obrisi = (req: express.Request, res: express.Response) => {
        let id = req.body.id // Preuzima id korisnika iz zahteva

        // Briše korisnika sa datim id-em iz baze
        Korisnik.deleteOne({ 'id': id }, (err, resp) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
        })
    }

    // Metoda za dohvatanje jednog korisnika po id-u
    dohvati = (req: express.Request, res: express.Response) => {
        let id = req.body.id // Preuzima id korisnika iz zahteva

        // Pronalazi korisnika sa datim id-em
        Korisnik.findOne({ 'id': id }, (err, kor) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json(kor) // Vraća pronađenog korisnika
        })
    }

    // Metoda za dohvaanjet korisnika na osnovu id-a radionice
    dohvatiZaRadionicu = (req: express.Request, res: express.Response) => {
        let idRad = req.body.idRad // Preuzima id radionice iz zahteva

        // Pronalazi korisnike koji su prijavljeni na određenu radionicu
        Korisnik.find({ 'radionice': idRad }, (err, kor) => {
            if (err) console.log(err) // Ispisuje grešku ako postoji
            else res.json(kor) // Vraća korisnike koji su prijavljeni na radionicu
        })
    }
}
