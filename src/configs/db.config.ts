import "dotenv/config";

export const dbConfig = {
  dbUrl: process.env.DB_URL,
  dbName: process.env.DB_NAME,
  dbCollectionName: process.env.DB_COLLECTION_NAME,
};
