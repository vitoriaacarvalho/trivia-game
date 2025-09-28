import { Prisma, PrismaClient } from "@prisma/client";
import { UserInput, UserOutput, userSchemaInput } from "../models/user";

const prisma = new PrismaClient();

export const userEntity = prisma.user;

export async function createUser(user: UserInput) {
  const validatedData = userSchemaInput.parse({
    email: user.email,
    username: user.username,
    passwordHash: user.passwordHash,
    role: user.role,
  });
  await userEntity.create({
    data: {
      email: validatedData.email,
      username: validatedData.username,
      passwordHash: validatedData.passwordHash,
      role: validatedData.role,
    }
  });
}

export async function getUser(username: string): Promise<UserOutput | null> {
  const user = await userEntity.findUnique({
    where: {
      username: username,
    },
  });
  return user ? _toUser(user) : null;
}

export async function updateFailedLoginAttempts(
  userId: string
): Promise<Number | null> {
  const user = await userEntity.update({
    where: {
      id: userId,
    },
    data: {
      failedLoginAttempts: {
        increment: 1,
      },
    },
  });
  return user ? user.failedLoginAttempts : null;
}

function _toUser(user: Prisma.UserGetPayload<Prisma.UserCreateArgs>): UserOutput {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    passwordHash: user.passwordHash,
    role: user.role,
    failedLoginAttempts: user.failedLoginAttempts,
    lockedUntil: user.lockedUntil ?? undefined,
    lastLoginAt: user.lastLoginAt ?? undefined, 
  };
}
