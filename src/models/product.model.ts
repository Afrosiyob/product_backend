import * as mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

export interface _IProductDocument extends mongoose.Document {
  user: string;
  title: string;
  description: string;
  price: number;
  createAt: Date;
  updateAt: Date;
}

const productSchema = new mongoose.Schema(
  {
    productId: {
      type: String,
      required: true,
      unique: true,
      default: () => uuidv4(),
    },
    user: {
      type: String,
      default: "admin",
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
  "products",
  productSchema
);
