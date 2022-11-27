import { object, string } from "zod";

export const params = {
  params: object({
    productId: string({
      required_error: "product id is required",
    }),
  }),
};
