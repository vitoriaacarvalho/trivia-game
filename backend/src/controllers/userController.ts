import { UserService } from "../services/userService"
import { UserOutput, UserInput, userEntity } from "../models/user"

export class UserController{
    static async createUser(user: UserInput){
        return await UserService.createUser(user);
    }
    
    static async getUser(username: string): Promise<UserOutput | null>{
        return await UserService.getUser(username);
    }
    
    static async updateFailedLoginAttempts(userId: string): Promise<Number | null>{
        return await UserService.updateFailedLoginAttempts(userId);
    }
}