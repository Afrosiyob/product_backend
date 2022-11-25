/* eslint-disable @typescript-eslint/no-misused-promises */
import { Express } from "express";

import {
  createProductHandler,
  deleteProductHandler,
  getProductHandler,
  updateProductHandler,
} from "../components/product/controllers";
import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "../components/product/schemas";
import { validate } from "../core/validations";

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
  app.get("/api/v1/product/:id", validate(getProductSchema), getProductHandler);
  app.delete(
    "/api/v1/product/:id",
    validate(deleteProductSchema),
    deleteProductHandler
  );
}
