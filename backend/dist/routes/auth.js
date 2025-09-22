"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const zod_1 = require("zod");
const userController_1 = require("../controllers/userController");
const router = express_1.default.Router();
router.post('/register', async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const passwordHash = await bcrypt_1.default.hash(password, 10);
        await (0, userController_1.createUser)({ email, username, passwordHash, role: "USER" });
        res.status(201).json({ message: 'User created successfully' });
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            res.status(400).json({ error: 'Validation failed', details: error.issues });
        }
        else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});
exports.default = router;
//# sourceMappingURL=auth.js.map