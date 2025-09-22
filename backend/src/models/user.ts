import { PrismaClient } from "@prisma/client";
import { z } from "zod";

const prisma = new PrismaClient();

export const userEntity = prisma.user;

export const userSchemaInput = z.object({
  email: z.email(),
  username: z.string().optional(),
  passwordHash: z.string(),
  role: z.enum(["ADMIN", "USER"]),
  failedLoginAttempts: z.number().optional(),
  lockedUntil: z.date().optional(),
  lastLoginAt: z.date().optional(),
});

export const userSchemaOutput = z.object({
  id: z.string(),
  email: z.email(),
  username: z.string().optional(),
  passwordHash: z.string(),
  role: z.enum(["ADMIN", "USER"]),
  failedLoginAttempts: z.number().optional(),
  lockedUntil: z.date().optional(),
  lastLoginAt: z.date().optional(),
});


export type UserInput = z.infer<typeof userSchemaInput>;

export type UserOutput = z.infer<typeof userSchemaOutput>;
