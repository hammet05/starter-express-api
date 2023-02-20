import {model, Schema} from 'mongoose'
import { IPunishment } from '../interfaces/IPunishment';



const punishmentSchema = new Schema({
    id: {type:Number,unique:true},
    name: {type: String, required:[true,'El nombre del premio es obligatorio.'], unique:true},
    description: {type: String, required:[true,'Una descripción es obligatoria.'], unique:true},
    state:{type:Boolean},
    pathImage: {type:String}
});


export const Punishment= model<IPunishment>('Punishment',punishmentSchema)