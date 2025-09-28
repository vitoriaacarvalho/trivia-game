import { z } from "zod";

export const userSchemaInput = z.object({
  email: z.email(),
  username: z.string(),
  passwordHash: z.string(),
  role: z.enum(["ADMIN", "USER"]),
  failedLoginAttempts: z.number().optional(),
  lockedUntil: z.date().optional(),
  lastLoginAt: z.date().optional(),
});

export const userSchemaOutput = z.object({
  id: z.string(),
  email: z.email(),
  username: z.string(),
  passwordHash: z.string(),
  role: z.enum(["ADMIN", "USER"]),
  failedLoginAttempts: z.number().optional(),
  lockedUntil: z.date().optional(),
  lastLoginAt: z.date().optional(),
});

export type UserInput = z.infer<typeof userSchemaInput>;

export type UserOutput = z.infer<typeof userSchemaOutput>;
