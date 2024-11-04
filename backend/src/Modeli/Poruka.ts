import mongoose from "mongoose"; // Uvoz mongoose biblioteke za rad sa MongoDB bazom
const Schema = mongoose.Schema;   // Kreiranje šeme koja definiše strukturu modela

// Definisanje modela Poruka sa svim atributima
let Poruka = new Schema({
    korisnik: { type: Number }, // ID korisnika koji je poslao poruku
    radionica: { type: Number }, // ID radionice u kojoj je poruka poslata
    tekst: { type: String }, // Tekst poruke
    datum_i_vreme: { type: String }, // Datum i vreme kada je poruka poslata (razmotriti Date tip za lakšu manipulaciju)
    kor: { type: Boolean } // Dodatni indikator (npr. da li je korisnik aktivan), moguće preimenovati radi veće jasnoće
});

// Izvoz modela 'Poruka' sa kolekcijom u bazi pod imenom 'Poruka'
export default mongoose.model('Poruka', Poruka, 'Poruka');
