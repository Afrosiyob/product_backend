import { object } from "zod";

import { params } from "./modules/params";
import { payload } from "./modules/payload";

export const createProductSchema = object({
  ...payload,
});

export const deleteProductSchema = object({
  ...params,
});

export const updateProductSchema = object({
  ...payload,
  ...params,
});

export const getProductSchema = object({
  ...params,
});
