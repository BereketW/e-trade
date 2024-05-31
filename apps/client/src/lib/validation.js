import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .min(4, { message: "Name must be at least 4 characters or above" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters or above" }),
});
export const loginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(5, { message: "Password must be at least 5 characters or above" }),
});
