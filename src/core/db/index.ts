import mongoose from "mongoose";
import config from "config";
import log from "../utils/log";

const URL = config.get<string>("db.URL") || "url";

async function connectDB() {
  return await mongoose
    .connect(URL)
    .then(() => log.info("Connected to db"))
    .catch((error) => {
      log.error("Could not connect to db", error);
      process.exit(1);
    });
}

export default connectDB;
