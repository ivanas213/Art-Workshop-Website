export class Korisnik{
    id:number
    ime:string;
    prezime:string;
    korisnicko_ime:string;
    lozinka:string;
    slika:string;
    id_organizacije:string;
    adresa_organizacije:string;
    ime_organizacije:string;
    telefon:string;
    email:string;
    tip:string;
    radionice:Array<number>=new Array<number>;
    prijavljene_radionice:Array<number>=new Array<number>;
    moje_radionice:Array<number>=new Array<number>;
    edit:boolean=false
}