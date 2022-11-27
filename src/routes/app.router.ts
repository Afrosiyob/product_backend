/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express } from "express";

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
  app.post(
    "/api/v1/product",
    validate(createProductSchema),
    createProductHandler
  );
  app.put(
    "/api/v1/product/:id",
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
    "/api/v1/product/:id",
    validate(deleteProductSchema),
    deleteProductHandler
  );
}
