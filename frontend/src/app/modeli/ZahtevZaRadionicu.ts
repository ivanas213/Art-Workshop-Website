import { Komentar } from "./Komentar"

export class ZahtevZaRadionicu{
    id:number
    slika:string
    naziv:string
    datum:string
    mesto:string
    opis:string
    svidjanja:Array<Number>
    komentari:Komentar[]
    duzi_opis:String
    galerija:Array<string>
    slobodna_mesta:number
    organizator:number
    status:string
}