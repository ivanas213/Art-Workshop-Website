import mongoose from "mongoose"; // Uvoz mongoose biblioteke za rad sa MongoDB bazom
const Schema = mongoose.Schema;   // Kreiranje šeme koja će definisati strukturu modela

// Definisanje modela Korisnik sa svim atributima
let Korisnik = new Schema({
    id: { type: Number }, // Jedinstveni ID korisnika
    ime: { type: String }, // Ime korisnika
    prezime: { type: String }, // Prezime korisnika
    korisnicko_ime: { type: String }, // Korisničko ime za prijavu
    lozinka: { type: String }, // Lozinka korisnika (proveriti enkripciju pre čuvanja)
    tip: { type: String }, // Tip korisnika (npr. organizator, učesnik itd.)
    telefon: { type: String }, // Broj telefona korisnika
    email: { type: String }, // Email adresa korisnika
    ime_organizacije: { type: String }, // Ime organizacije (ako je korisnik organizator)
    adresa_organizacije: { type: String }, // Adresa organizacije
    id_organizacije: { type: String }, // Jedinstveni ID organizacije
    slika: { type: String }, // URL ili putanja do slike profila korisnika
    radionice: { type: Array }, // Spisak ID-eva radionica na kojima korisnik učestvuje
    prijavljene_radionice: { type: Array }, // Spisak radionica na koje je korisnik prijavljen
    moje_radionice: { type: Array } // Spisak radionica koje je korisnik kreirao (ako je organizator)
});

// Izvoz modela 'Korisnik' sa kolekcijom u bazi pod imenom 'Korisnik'
export default mongoose.model('Korisnik', Korisnik, 'Korisnik');
