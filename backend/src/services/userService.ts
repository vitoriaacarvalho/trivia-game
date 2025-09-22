import {UserOutput, UserInput} from "../models/user";
import * as userModule from "../database/userModule";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { AuthenticationError, InternalServerError, UserNotFoundError } from "../errors";

export class UserService{
    static async createUser(user: UserInput){
        return await userModule.createUser(user);
    }
    
    static async getUser(username: string): Promise<UserOutput | null>{
        return await userModule.getUser(username);
    }
    
    static async updateFailedLoginAttempts(userId: string): Promise<Number | null>{
        return await userModule.updateFailedLoginAttempts(userId);
    }

    static async register(email: string, username: string, password: string) {
        const passwordHash = await bcrypt.hash(password, 10);
        return await this.createUser({email, username, passwordHash, role: "USER"});
    }

    static async login(username: string, password: string) {
        const user = await this.getUser(username);
        if (!user) {
            throw new UserNotFoundError();
        }

        const passwordMatch = await bcrypt.compare(password, user.passwordHash);
        if (!passwordMatch) {
            await this.updateFailedLoginAttempts(user.id);
            throw new AuthenticationError("Wrong password. Please try again.");
        }

        const secret = process.env.ACCESS_TOKEN_SECRET;
        if (!secret) {
            console.error('Error: ACCESS_TOKEN_SECRET is not set.');
            throw new InternalServerError('Server configuration error.');
        }

        const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
        return { token, user };
    }
}
