import { User } from "../models/user";
export declare function createUser(user: User): import(".prisma/client").Prisma.Prisma__UserClient<{
    email: string;
    username: string | null;
    passwordHash: string;
    role: import(".prisma/client").$Enums.UserRole;
    failedLoginAttempts: number;
    lockedUntil: Date | null;
    lastLoginAt: Date | null;
    id: string;
    createdAt: Date;
    updatedAt: Date;
}, never, import("@prisma/client/runtime/library").DefaultArgs, import(".prisma/client").Prisma.PrismaClientOptions>;
//# sourceMappingURL=userController.d.ts.map