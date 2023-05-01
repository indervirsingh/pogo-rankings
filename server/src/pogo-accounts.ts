import * as mongodb from "mongodb"

export interface PogoAccounts {
    username: string
    email: string
    password: string
    team: "Instinct" | "Mystic" | "Valor"
    country: string
    birthday: string
    _id?: mongodb.ObjectId

}