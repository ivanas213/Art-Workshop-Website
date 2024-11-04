import mongoose from "mongoose"; // Uvoz mongoose za rad sa MongoDB bazom
const Schema = mongoose.Schema;   // Kreiranje šeme za definisanje modela

// Definisanje modela ZahtevZaRadionicu za čuvanje zahteva za kreiranje radionica
let ZahtevZaRadionicu = new Schema({
    id: { type: Number },              // Jedinstveni identifikator zahteva za radionicu
    slika: { type: String },           // Putanja ili URL slike koja predstavlja radionicu
    naziv: { type: String },           // Naziv radionice
    ime: { type: String },             // Ime organizatora ili lica koje podnosi zahtev
    datum: { type: String },           // Datum održavanja radionice
    mesto: { type: String },           // Mesto gde će se radionica održati
    opis: { type: String },            // Kratki opis radionice
    svidjanja: { type: Array },        // Lista korisnika koji su lajkovali radionicu
    komentari: { type: Array },        // Lista komentara na radionicu
    duzi_opis: { type: String },       // Detaljniji opis radionice
    galerija: { type: Array },         // Galerija slika vezanih za radionicu
    slobodna_mesta: { type: Number },  // Broj slobodnih mesta za prijavu na radionicu
    organizator: { type: Number },     // ID organizatora koji podnosi zahtev
    status: { type: String }           // Status zahteva za radionicu (npr. "nov", "odobren", "odbijen")
});

// Izvoz modela 'ZahtevZaRadionicu' koji se čuva u kolekciji sa imenom 'ZahtevZaRadionicu'
export default mongoose.model('ZahtevZaRadionicu', ZahtevZaRadionicu, 'ZahtevZaRadionicu');
