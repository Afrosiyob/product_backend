import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";
import * as mongoose from "mongoose";

import log from "../utils/log.util";

dotenv.config();

export const collections: { product?: mongoDB.Collection } = {};

/* eslint-disable */

export async function connectDB() {
  const URL = process.env.DB_URL || "";

  return await mongoose
    .connect(URL)
    .then(() => log.info("Connected to database"))
    .catch((error) => {
      log.error("Could not connect to database", error);
      process.exit(1);
    });
}

/* eslint-enable */
