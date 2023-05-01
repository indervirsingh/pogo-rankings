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


// Gets a pogo account by id

pogoAccountsRouter.get("/:id", async (req, res) => {
    try {
        const id = req?.params?.id

        // ObjectId() converts the string id to an ObjectId
        const query = { _id: new mongodb.ObjectId(id) }
        // findOne() returns the pogoAccount with the given id
        const pogoAccount = await collections.pogoAccounts.findOne(query)
    

        if (pogoAccount) {
            res.status(200).send(pogoAccount)
        } else {
            res.status(404).send(`Failed to find a pogo account with id: ${id}`)
        }

    } catch (error) {
        res.status(500).send(`Failed to find a pogo account with id: ${req?.params?.id}`)
    }

})

pogoAccountsRouter.post("/", async (req, res) => {
    try {
        const pogoAccount = req?.body

        // insertOne() inserts the pogoAccount into the database
        const result = await collections.pogoAccounts.insertOne(pogoAccount)

        // The insertedId property contains the id of the inserted document
        const insertedId = result?.insertedId

        if (insertedId) {
            res.status(201).send(`Successfully created a pogo account with id: ${insertedId}`)
        } else {
            res.status(500).send(`Failed to create a pogo account`)
        }

    } catch (error) {
        res.status(500).send(error.message)
    }
}


