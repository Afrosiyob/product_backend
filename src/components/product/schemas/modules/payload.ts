import { number, object, string } from "zod";

export const payload = {
  body: object({
    title: string({
      required_error: "title is required",
    }),
    price: number({
      required_error: "price is required",
    }),
    description: string({
      required_error: "description is required",
    }).min(10, "description should be at last 10 characters long"),
  }),
};
