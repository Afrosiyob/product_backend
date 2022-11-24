import express, { Request, Response, NextFunction } from "express";
import config from "config";
import cors from "cors";
import log from "./core/utils/log";
import connectDB from "./core/db";

const app = express();
const PORT = config.get<number>("app.PORT") || 8080;
const LOCALE_ADDRESS = config.get<string>("app.LOCAL_ADDRESS") || "0.0.0.0";

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

app.listen(PORT, LOCALE_ADDRESS, async function () {
  log.info(`App is running at http://localhost:${PORT} `);
  await connectDB();
});
