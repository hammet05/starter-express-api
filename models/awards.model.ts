import {model, Schema} from 'mongoose'
import { IAward } from '../interfaces/IAwards';



const awardsSchema = new Schema({
    id: {type:Number,unique:true},
    name: {type: String, required:[true,'El nombre del premio es obligatorio.'], unique:true},
    description: {type: String, required:[true,'Una descripción es obligatoria.'], unique:true},
    state:{type:Boolean},
    pathImage: {type:String}
});



// awardsSchema.pre('save',function(next){
    
//     // this.id = this.$inc('id', 1)
   
    
// });

export const Award= model<IAward>('Award',awardsSchema)