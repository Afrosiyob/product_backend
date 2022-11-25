import * as mongoose from "mongoose";

export interface _IProductDocument extends mongoose.Document {
  title: string;
  description: string;
  price: number;
  createAt: Date;
  updateAt: Date;
}
