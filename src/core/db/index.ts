import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";
import mongoose from "mongoose";

import log from "../utils/log";

dotenv.config();

export const collections: { product?: mongoDB.Collection } = {};

/* eslint-disable */

export async function connectDB() {
  const URL = process.env.DB_CONN_STRING || "";

  return await mongoose
    .connect(URL)
    .then(() => log.info("Connected to database"))
    .catch((error) => {
      log.error("Could not connect to database", error);
      process.exit(1);
    });
}

export async function connectDBConfig() {
  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    process.env.DB_CONN_STRING || ""
  );

  await client.connect();

  const db: mongoDB.Db = client.db(process.env.DB_NAME);

  const productCollection: mongoDB.Collection = db.collection(
    process.env.PRODUCT_COLLECTION_NAME || ""
  );

  collections.product = productCollection;

  log.info(
    `Successfully connected to database: ${db.databaseName} and collection: ${productCollection.collectionName}`
  );
}

/* eslint-enable */
