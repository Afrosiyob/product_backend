import {
  DocumentDefinition,
  FilterQuery,
  QueryOptions,
  UpdateQuery,
} from "mongoose";

import { _IProductDocument, Product } from "../models/product.model";

export const createProduct = async (
  input:
    | DocumentDefinition<Omit<_IProductDocument, "createdAt" | "updatedAt">>
    | any
): Promise<object> => await Product.create(input);

export const findProduct = async (
  query: FilterQuery<_IProductDocument>,
  options: QueryOptions = { lean: true }
): Promise<object | null> => await Product.findOne(query, {}, options);

export const findProductAndDeleteProduct = async (
  query: FilterQuery<_IProductDocument>,
  options: QueryOptions = { lean: true }
): Promise<object | null> => await Product.findOneAndDelete(query, options);

export const findProducts = async (
  query: FilterQuery<_IProductDocument>
): Promise<any> => await Product.find(query).lean();

export const findAndUpdateProduct = async (
  query: FilterQuery<_IProductDocument>,
  update: UpdateQuery<_IProductDocument>,
  options: QueryOptions
): Promise<object | null> =>
  await Product.findOneAndUpdate(query, update, options);

export const deleteProduct = async (
  query: FilterQuery<_IProductDocument>
): Promise<object | null> => await Product.deleteOne(query);
