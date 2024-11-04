import mongoose from "mongoose";
const Schema=mongoose.Schema;
let Radionica=new Schema({
    id:{type:Number},
    slika:{type:String},
    naziv:{type:String},
    ime:{type:String},
    datum:{type:String},
    mesto:{type:String},
    opis:{type:String},
    lajkovi:{type:Array},
    komentari:{type:Array},
    duzi_opis:{type:String},
    galerija:{type:Array},
    slobodna_mesta:{type:Number},
    organizator:{type:Number}
}
);
export default mongoose.model('Radionica',Radionica,'Radionica');
