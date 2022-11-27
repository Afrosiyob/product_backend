import { object } from "zod";

import { params } from "./components/params";
import { payload } from "./components/payload";

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
