import express from 'express'; // Uvoz Express-a za kreiranje aplikacije
import mongoose from 'mongoose'; // Uvoz Mongoose-a za rad sa MongoDB bazom
import cors from 'cors'; // Uvoz CORS middleware-a za omogućavanje zahteva iz drugih domena
import KorisnikRuter from './Ruteri/Korisnik.ruter'; // Uvoz rutera za korisnike
import ZahtevRuter from './Ruteri/Zahtev.ruter'; // Uvoz rutera za zahteve
import RadionicaRuter from './Ruteri/Radionica.ruter'; // Uvoz rutera za radionice
import PorukaRuter from './Ruteri/Poruka.ruter'; // Uvoz rutera za poruke
import ZahtevZaPrijavuRuter from './Ruteri/ZahtevZaPrijavu.ruter'; // Uvoz rutera za zahteve za prijavu
import { createServer } from 'http'; // Uvoz za kreiranje HTTP servera
import { Server } from 'socket.io'; // Uvoz Socket.io za rad sa real-time komunikacijom
import ZahtevZaRadionicuRuter from './Ruteri/ZahtevZaRadionicu.ruter'; // Uvoz rutera za zahteve za radionice

const app = express(); // Kreiranje Express aplikacije

// Middleware konfiguracija
app.use(cors()); // Omogućava zahteve iz drugih domena (CORS)
app.use(express.json({ 'limit': '20mb' })); // Omogućava parsiranje JSON tela sa limitom od 20MB

// Kreiranje osnovnog rutera
const ruter = express.Router();
app.use('/', ruter);

// Povezivanje raznih rutera
ruter.use('/korisnik', KorisnikRuter);
ruter.use('/zahtev', ZahtevRuter);
ruter.use('/zahtevZaPrijavu', ZahtevZaPrijavuRuter);
ruter.use('/radionica', RadionicaRuter);
ruter.use('/poruka', PorukaRuter);
ruter.use('/zahtevZaRadionicu', ZahtevZaRadionicuRuter);

// Konekcija sa MongoDB bazom podataka
mongoose.connect('mongodb://localhost:27017/FEBRUAR'); // Povezivanje na MongoDB bazu
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('db connected'); // Poruka u konzoli nakon uspešne konekcije sa bazom
});

// Kreiranje HTTP servera koji pokreće Express aplikaciju
const httpServer = createServer(app);
httpServer.listen(4000, () => console.log(`Express server running on port 4000`)); // Pokretanje servera na portu 4000
