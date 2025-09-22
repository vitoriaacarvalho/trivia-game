"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = exports.userEntity = void 0;
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const prisma = new client_1.PrismaClient();
exports.userEntity = prisma.user;
exports.userSchema = zod_1.z.object({
    email: zod_1.z.email(),
    username: zod_1.z.string().optional(),
    passwordHash: zod_1.z.string(),
    role: zod_1.z.enum(["ADMIN", "USER"]),
    failedLoginAttempts: zod_1.z.number().optional(),
    lockedUntil: zod_1.z.date().optional(),
    lastLoginAt: zod_1.z.date().optional(),
});
//# sourceMappingURL=user.js.map