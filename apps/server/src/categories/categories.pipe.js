import { createCategorySchema } from "./category.schema";
import { formatZodError } from "../common/format-zod-error";
import { HttpException } from "../common/http-exception";

export function createCategoryPipe(req, res, next) {
  const data = req.body;
  const result = createCategorySchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateCategoryPipe(req, res, next) {
  const data = req.body;
  const result = createCategorySchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
