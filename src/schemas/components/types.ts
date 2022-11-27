import { TypeOf } from "zod";

import {
  createProductSchema,
  deleteProductSchema,
  getProductSchema,
  updateProductSchema,
} from "../product.schema";

export type CreateProductInput = TypeOf<typeof createProductSchema>;
export type GetProductInput = TypeOf<typeof getProductSchema>;
export type UpdateProductInput = TypeOf<typeof updateProductSchema>;
export type DeleteProductInput = TypeOf<typeof deleteProductSchema>;
