import * as mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

import { _IProductDocument } from "./modules/interfaces";

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => `product_${uuidv4()}`,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model<_IProductDocument>(
  "Product",
  productSchema
);
