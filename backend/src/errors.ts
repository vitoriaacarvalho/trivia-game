export class UserNotFoundError extends Error {
    constructor(message?: string) {
        super(message ?? "User not found");
        this.name = "UserNotFoundError";
    }
}

export class AuthenticationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "AuthenticationError";
    }
}

export class InternalServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = "InternalServerError";
    }
}