import { Request, Response } from "express";

import log from "../../../core/utils/log";
import {
  CreateProductInput,
  UpdateProductInput,
} from "../schemas/modules/types";
import {
  createProduct,
  deleteProduct,
  findAndUpdateProduct,
  findProduct,
  getAllProduct,
} from "../services";

export const createProductHandler = async (
  req: Request<{}, {}, CreateProductInput["body"]>,
  res: Response
): Promise<void> => {
  const body = req.body;
  const product = await createProduct({ ...body });

  res.send(product);
};

export const updateProductHandler = async (
  req: Request<UpdateProductInput["params"]>,
  res: Response
): Promise<void> => {
  const productId = req.params.productId;

  const update = req.body;

  const product = await findProduct({ productId });

  if (product == null) res.sendStatus(404);

  const updatedProduct = await findAndUpdateProduct({ productId }, update, {
    new: true,
  });

  res.send(updatedProduct);
};

export const getProductHandler = async (
  req: Request<UpdateProductInput["params"]>,
  res: Response
): Promise<void> => {
  const productId = req.params.productId;

  const product = await findProduct({ productId });

  if (product == null) res.sendStatus(404);

  res.send(product);
};

export const getAllProductHandler = async (): Promise<void> => {
  const products = getAllProduct();

  log.info(products);
};

export const deleteProductHandler = async (
  req: Request<UpdateProductInput["params"]>,
  res: Response
): Promise<void> => {
  const productId = req.params.productId;

  const product = await findProduct({ productId });

  if (product == null) res.sendStatus(404);

  await deleteProduct({ productId });

  res.sendStatus(200);
};
