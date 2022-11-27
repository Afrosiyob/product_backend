import "dotenv/config";

import cors from "cors";
import express, { NextFunction, Request, Response } from "express";

import { connectDB } from "./db/db.connect";
import { router } from "./routes/app.router";
import log from "./utils/log.util";

const app = express();

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

  router(app);
});

// process.exit(1);
