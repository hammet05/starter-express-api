import Document from 'mongoose'

export interface IPunishment extends Document {

    id:number
    name:string,
    description: string,
    state:boolean,
    pathImage: string
    

}