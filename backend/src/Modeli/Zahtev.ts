import mongoose from "mongoose"; // Uvoz mongoose za rad sa MongoDB bazom
const Schema = mongoose.Schema;   // Kreiranje mongoose šeme za definisanje modela

// Definisanje modela Zahtev sa svim potrebnim poljima
let Zahtev = new Schema({
    id: { type: Number }, // Jedinstveni identifikator zahteva
    ime: { type: String }, // Ime osobe koja je podnela zahtev
    prezime: { type: String }, // Prezime podnosioca zahteva
    korisnicko_ime: { type: String }, // Željeno korisničko ime podnosioca zahteva
    lozinka: { type: String }, // Lozinka podnosioca zahteva
    tip: { type: String }, // Tip korisnika (npr. korisnik, organizator)
    telefon: { type: String }, // Broj telefona podnosioca zahteva
    email: { type: String }, // Email adresa podnosioca zahteva
    ime_organizacije: { type: String }, // Ime organizacije 
    adresa_organizacije: { type: String }, // Adresa organizacije 
    id_organizacije: { type: String }, // ID organizacije 
    slika: { type: String }, // Putanja ili URL slike podnosioca zahteva
    status: { type: String } // Status zahteva (npr. "nov", "prihvacen", "odbijen")
});

// Izvoz modela 'Zahtev' koji se čuva u kolekciji sa imenom 'Zahtev'
export default mongoose.model('Zahtev', Zahtev, 'Zahtev');
