import {model, Schema} from 'mongoose'
import { IPlayer } from '../interfaces/IPlayer';

const playerSchema = new Schema({

    name: { type: String,  required: [true,'El nombre es obligatorio.'], unique:true },

    avatar: {type:String, required: [true,'Escoge un avatar.']},
    
    path: {type: String},

    patePerro: {type: Number},

    unos: {type: Number}

    }

);

export const Player= model<IPlayer>('Player',playerSchema)