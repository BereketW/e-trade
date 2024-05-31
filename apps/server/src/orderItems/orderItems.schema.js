import { z } from "zod";

export const createOrderSchema = z.object({
  name: z.string().min(2).max(50),
  description: z.string().optional(),
  userId: z.string().optional,
});
