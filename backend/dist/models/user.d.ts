import { z } from "zod";
export declare const userEntity: import(".prisma/client").Prisma.UserDelegate<import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
export declare const userSchema: z.ZodObject<{
    email: z.ZodEmail;
    username: z.ZodOptional<z.ZodString>;
    passwordHash: z.ZodString;
    role: z.ZodEnum<{
        ADMIN: "ADMIN";
        USER: "USER";
    }>;
    failedLoginAttempts: z.ZodOptional<z.ZodNumber>;
    lockedUntil: z.ZodOptional<z.ZodDate>;
    lastLoginAt: z.ZodOptional<z.ZodDate>;
}, z.core.$strip>;
export type User = z.infer<typeof userSchema>;
//# sourceMappingURL=user.d.ts.map