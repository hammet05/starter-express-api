import Document from 'mongoose'

export interface IPlayer extends Document {

    name:string,
    avatar: string,
    path:string,
    patePerro: number,
    unos:number

}