"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = createUser;
const user_1 = require("../models/user");
function createUser(user) {
    const validatedData = user_1.userSchema.parse({
        email: user.email,
        username: user.username,
        passwordHash: user.passwordHash,
        role: user.role
    });
    return user_1.userEntity.create({ data: validatedData });
}
//# sourceMappingURL=userController.js.map