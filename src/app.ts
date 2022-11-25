import cors from "cors";
import * as dotenv from "dotenv";
import express, { NextFunction, Request, Response } from "express";

import { connectDB, connectDBConfig } from "./core/db";
import log from "./core/utils/log";
import { router } from "./routes";

dotenv.config();
const app = express();
// const PORT = process.env.PORT;
// const LOCALE_ADDRESS = process.env.LOCAL_ADDRESS;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req: Request, res: Response, next: NextFunction) => {
  log.info(req.method);
  log.info(req.path);
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// eslint-disable-next-line @typescript-eslint/no-misused-promises
app.listen(8080, "0.0.0.0", async function () {
  log.info(`App is running at http://localhost:${8080} `);
  await connectDB();
  await connectDBConfig();
  router(app);
});
