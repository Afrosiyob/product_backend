import { Request, Response } from "express";

import {
  CreateProductInput,
  GetProductInput,
  UpdateProductInput,
} from "../schemas/components/types";
import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct,
  findProducts,
} from "../services/product.service";

export const createProductHandler = async (
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
): Promise<object> => {
  const body = req.body;
  const product = await createProduct({ ...body });

  return res.send(product);
};

export const updateProductHandler = async (
  req: Request<UpdateProductInput["params"]>,
  res: Response
): Promise<object> => {
  const productId = req.params.productId;

  const update = req.body;

  const product = await findProduct({ productId });

  if (product == null) return res.sendStatus(404);

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  });

  return res.send(updatedProduct);
};

export const getProductHandler = async (
  req: Request<GetProductInput["params"]>,
  res: Response
): Promise<object> => {
  const productId = req.params.productId;

  const product = await findProduct({ productId });

  if (product == null) return res.sendStatus(404);

  return res.send(product);
};

export const getAllProductHandler = async (
  req: Request,
  res: Response
): Promise<object> => {
  const products = await findProducts({ user: "admin" });

  return res.send(products);
};

export const deleteProductHandler = async (
  req: Request<UpdateProductInput["params"]>,
  res: Response
): Promise<object> => {
  const productId = req.params.productId;

  const product = await findProduct({ productId });

  if (product == null) return res.sendStatus(404);

  await deleteProduct({ productId });

  return res.sendStatus(200);
};
