import Document from 'mongoose'

export interface IAward extends Document {

    id:number
    name:string,
    description: string,
    state:boolean,
    pathImage: string
    

}