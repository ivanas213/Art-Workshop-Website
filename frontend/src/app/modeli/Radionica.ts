import { Komentar } from "./Komentar"

export class Radionica{
    id:number
    slika:string
    naziv:string
    datum:string
    mesto:string
    opis:string
    svidjanja:Array<number>
    komentari:Array<Komentar>;
    duzi_opis:String
    galerija:Array<string>
    slobodna_mesta:number
    organizator:number
    edit:boolean=false
}