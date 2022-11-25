import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";

import { Product } from "../models";
import { _IProductDocument } from "../models/modules/interfaces";

export const createProduct = async (
  input:
    | DocumentDefinition<Omit<_IProductDocument, "createdAt" | "updatedAt">>
    | any
): Promise<object> => await Product.create(input);

export const getAllProduct = async (
  query?: FilterQuery<_IProductDocument>
): Promise<object | null> => {
  if (query != null) {
    return await Product.find({ query }).lean();
  } else {
    return await Product.find().lean();
  }
};

export const findProduct = async (
  query: FilterQuery<_IProductDocument>,
  options: QueryOptions = { lean: true }
): Promise<object | null> => await Product.findOne(query, {}, options);

export const findAndUpdateProduct = async (
  query: FilterQuery<_IProductDocument>,
  update: UpdateQuery<_IProductDocument>,
  options: QueryOptions
): Promise<object | null> =>
  await Product.findOneAndUpdate(query, update, options);

export const deleteProduct = async (
  query: FilterQuery<_IProductDocument>
): Promise<object | null> => await Product.deleteOne(query);
