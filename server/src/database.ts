import * as mongodb from "mongodb";
import { PogoAccounts } from "./pogo-accounts";

export const collections: {
  pogoAccounts?: mongodb.Collection<PogoAccounts>;
} = {}

export const connectToDatabase = async (uri: string) => {
  const client = new mongodb.MongoClient(uri)
  await client.connect()

  const db = client.db("pogo-rankings")
  await applySchemaValidation(db)

  const pogoAccountsCollection = db.collection<PogoAccounts>("pogoAccounts")
  collections.pogoAccounts = pogoAccountsCollection
}



// Update existing collection with JSON schema validation so our documents match the PogoAccounts model, even if added elsewhere
const applySchemaValidation = async (db: mongodb.Db) => {
    const jsonSchema = {
        $jsonSchema: {
            bsonType: "object",
            required: ["username, email, password, team, country, birthday"],
            additionalProperties: false,
            properties: {
              _id: {},
              username: {
                bsonType: "string",
                description: "'username' is required and is a string",
              },
              email: {
                bsonType: "string",
                description: "'email' is required and is a string",
              },
              password: {
                bsonType: "string",
                description: "'password' is required and is a string",
              },
              team: {
                bsonType: "string",
                description: "'team' is required and is a string",
                enum: ["Instinct", "Mystic", "Valor"],
              },
              country: {
                bsonType: "string",
                description: "'country' is required and is a string"
              },
              birthday: {
                bsonType: "string",
                description: "'birthday' is required and is a string"
              },
          },
      },
  }

// Try applying the modification to the collection, if the collection doesn't exist, create it
await db.command({
  collMod: "pogoAccounts",
  validator: jsonSchema
  }).catch(async (error: mongodb.MongoServerError) => {
      if (error.codeName === 'NamespaceNotFound') {
        await db.createCollection("pogoAccounts", {validator: jsonSchema})
      }
  })
}
