import express from 'express'
import ZahtevZaRadionicu from '../Modeli/ZahtevZaRadionicu'

// Definisanje kontrolera za rukovanje zahtevima za kreiranje novih radionica
export class ZahtevZaRadionicuKontroler {

    // Metod dodajNovi: dodaje novi zahtev za kreiranje radionice sa početnim statusom "nov"
    dodajNovi = (req: express.Request, res: express.Response) => {
        let zah = new ZahtevZaRadionicu(req.body) // Kreiranje novog ZahtevZaRadionicu objekta sa podacima iz tela zahteva
        
        zah.status = "nov" // Postavljanje početnog statusa zahteva na "nov"

        // Čuvanje zahteva za kreiranje radionice u bazi
        zah.save((err, resp) => {
            if (err) console.log(err) // Logovanje greške ako dođe do problema prilikom čuvanja
        })
    }

    // Metod dohvatiSve: dohvata sve zahteve za kreiranje radionica iz baze
    dohvatiSve = (req: express.Request, res: express.Response) => {
        ZahtevZaRadionicu.find({}, (err, zahtevi) => { // Pronalazi sve dokumente u kolekciji ZahtevZaRadionicu
            if (err) console.log(err) // Logovanje greške ako dođe do problema prilikom pretrage
            else res.json(zahtevi) // Vraća listu svih zahteva kao JSON odgovor
        })
    }
}
