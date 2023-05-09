import * as dotenv from "dotenv"
import cors from "cors"
import express from "express"
import { connectToDatabase } from "./database"
import { pogoAccountsRouter } from "./pogo-accounts.routes"


// Load environment variables from the .env file, where the ATLAS_URI is configured
require('dotenv').config()

// ATLAS_URI

var ATLAS_URI
if (process.env.ATLAS_URI) {
    ATLAS_URI = process.env.ATLAS_URI
}


// if (! ATLAS_URI) {
//     console.error("No ATLAS_URI environment variable has been defined in config.env")
//     process.exit(1)
// }
ATLAS_URI = "mongodb+srv://indi:kQt4ztXnCJnYj1f6@pogoaccountscluster.oxqfol2.mongodb.net/?retryWrites=true&w=majority"

connectToDatabase(ATLAS_URI)
    .then( () => {
        const app = express()
        app.use(cors())
        app.use("./pogo-accounts", pogoAccountsRouter)

        // start the Express server
        app.listen(5200, () => {
            console.log(`Server is running at http://localhost:5200...`)
        })

    })
    .catch(error => console.error(error))