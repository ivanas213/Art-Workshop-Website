import express from 'express'
import ZahtevZaRadionicu from '../Modeli/ZahtevZaRadionicu'
import Radionica from '../Modeli/Radionica'

// Klasa kontrolera za radionice, koja definiše metode za rad sa podacima o radionicama u bazi
export class RadionicaKontroler {

    // Metoda za dohvatanje svih radionica iz baze
    dohvatiSve = (req: express.Request, res: express.Response) => {
        Radionica.find({}, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    // Metoda za pronalaženje radionica na osnovu imena i mesta
    pronadji = (req: express.Request, res: express.Response) => {
        let ime = req.body.ime
        let mesto = req.body.mesto

        // Različite kombinacije filtera za pretragu prema imenu i/ili mestu
        if (ime == null || ime == "") {
            Radionica.find({ 'mesto': { $regex: mesto } }, (err, resp) => {
                if (err) console.log(err)
                else res.json(resp)
            })
        } else if (mesto == null || mesto == "") {
            Radionica.find({ 'ime': { $regex: ime } }, (err, resp) => {
                if (err) console.log(err)
                else res.json(resp)
            })
        } else if ((ime == null || ime == "") && (mesto == null || mesto == "")) {
            Radionica.find({}, (err, resp) => {
                if (err) console.log(err)
                else res.json(resp)
            })
        } else {
            Radionica.find({ 'ime': { $regex: ime } }, { 'mesto': { $regex: mesto } }, (err, resp) => {
                if (err) console.log(err)
                else res.json(resp)
            })
        }
    }

    // Metoda za dohvatanje pojedinačne radionice na osnovu ID-a
    dohvati = (req: express.Request, res: express.Response) => {
        let id = req.body.id
        Radionica.findOne({ "id": id }, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    // Metoda za izmenu postojećih podataka o radionici
    izmeni = (req: express.Request, res: express.Response) => {
        let id = req.body.id
        let radionica = new Radionica(req.body)
        Radionica.deleteOne({ "id": id }, (err, resp) => {
            if (err) console.log(err)
        })
        radionica.save((err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    // Metoda za otkazivanje radionice i ažuriranje liste korisnikovih radionica
    otkazi = (req: express.Request, res: express.Response) => {
        let idRad = req.body.idRad
        let idKor = req.body.idKor
        let niz = req.body.niz
        Radionica.deleteOne({ "id": idRad }, (err, resp) => {
            if (err) console.log(err)
        })
        Radionica.updateOne({ "id": idKor }, { 'moje_radionice': niz }, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    // Metoda za dodavanje nove radionice
    dodajNovu = (req: express.Request, res: express.Response) => {
        let rad = new Radionica(req.body)
        rad.save((err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    // Metoda za brisanje radionice na osnovu ID-a
    obrisi = (req: express.Request, res: express.Response) => {
        let id = req.body.id
        Radionica.deleteOne({ 'id': id }, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }

    // Metoda za prihvatanje zahteva za novu radionicu
    prihvati = (req: express.Request, res: express.Response) => {
        let id_zah = req.body.id_zah
        let radionica = new Radionica()

        // Postavljanje svojstava nove radionice na osnovu podataka iz zahteva
        radionica.id = req.body.id
        radionica.naziv = req.body.naziv
        radionica.slika = req.body.slika
        radionica.datum = req.body.datum
        radionica.mesto = req.body.mesto
        radionica.opis = req.body.opis
        radionica.svidjanja = req.body.svidjanja
        radionica.komentari = req.body.komentari
        radionica.duzi_opis = req.body.duzi_opis
        radionica.slobodna_mesta = req.body.slobodna_mesta
        radionica.organizator = req.body.organizator

        // Ažuriranje statusa zahteva u "prihvacen"
        ZahtevZaRadionicu.updateOne({ 'id': id_zah }, { 'status': 'prihvacen' }, (err, resp) => {
            if (err) console.log(err)
        })
        radionica.save((err, r) => {
            if (err) console.log(err)
            else res.json({ 'poruka': 'Zahtev je prihvacen i radionica je dodata!' })
        })
    }

    // Metoda za odbijanje zahteva za novu radionicu
    odbij = (req: express.Request, res: express.Response) => {
        let id_zah = req.body.id_zah

        // Ažuriranje statusa zahteva u "odbijen"
        ZahtevZaRadionicu.updateOne({ 'id': id_zah }, { 'status': 'odbijen' }, (err, resp) => {
            if (err) console.log(err)
            else res.json(resp)
        })
    }
}
