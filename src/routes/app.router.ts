/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express, Request, Response } from "express";

import {
  createProductHandler,
  deleteProductHandler,
  getAllProductHandler,
  getProductHandler,
  updateProductHandler,
} from "../controllers/product.controller";
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "../schemas/product.schema";
import { validate } from "../validations/api.validation";

export function router(app: Express): void {
  app.get("/", (req: Request, res: Response) => {
    res.send("hello world");
  });

  app.post(
    "/api/v1/product",
    validate(createProductSchema),
    createProductHandler
  );
  app.put(
    "/api/v1/product/:productId",
    validate(updateProductSchema),
    updateProductHandler
  );

  app.get("/api/v1/product", getAllProductHandler);

  app.get(
    "/api/v1/product/:productId",
    validate(getProductSchema),
    getProductHandler
  );
  app.delete(
    "/api/v1/product/:productId",
    validate(deleteProductSchema),
    deleteProductHandler
  );
}
