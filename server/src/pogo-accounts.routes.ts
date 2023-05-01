import * as express from "express"
import * as mongodb from "mongodb"
import { collections } from "./database"

export const pogoAccountsRouter = express.Router()
pogoAccountsRouter.use(express.json())

// The route is "/" because all the endpoints from this file are registered under 'pogo-accounts' route
pogoAccountsRouter.get("/", async (_req, res) => {
    try {
        // The find() method works because we pass an empty object and get all data, 
        // The toArray() method will convert the cursor to an array
        const pogoAccounts = await collections.pogoAccounts.find({}).toArray()
        res.status(200).send(pogoAccounts)
    } catch (error) {
        res.status(500).send(error.message)
    }
})

