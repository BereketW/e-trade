// billing-address.validation.js

import { formatZodError } from "../common/format-zod-error";
import { HttpException } from "../common/http-exception";
import { createAddressSchema } from "./billing-address.schema";

export function createAddressPipe(req, res, next) {
  const data = req.body;
  const result = createAddressSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}

export function updateAddressPipe(req, res, next) {
  const data = req.body;
  const result = createAddressSchema.safeParse(data);
  if (!result.success) {
    throw new HttpException(formatZodError(result.error), 400);
  }
  req.body = result.data;
  next();
}
