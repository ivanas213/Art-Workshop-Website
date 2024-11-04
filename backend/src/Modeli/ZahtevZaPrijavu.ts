import mongoose from "mongoose"; // Uvoz mongoose za rad sa MongoDB bazom
const Schema = mongoose.Schema;   // Kreiranje mongoose šeme za definisanje modela

// Definisanje modela ZahtevZaPrijavu za čuvanje prijava korisnika na radionice
let ZahtevZaPrijavu = new Schema({
    id: { type: Number },            // Jedinstveni identifikator zahteva za prijavu
    idKorisnika: { type: Number },   // ID korisnika koji podnosi zahtev
    idRadionice: { type: Number },   // ID radionice na koju se korisnik prijavljuje
    status: { type: String }         // Status zahteva (npr. "nov", "prihvacen", "odbijen")
});

// Izvoz modela 'ZahtevZaPrijavu' koji se čuva u kolekciji sa imenom 'ZahtevZaPrijavu'
export default mongoose.model('ZahtevZaPrijavu', ZahtevZaPrijavu, 'ZahtevZaPrijavu');
