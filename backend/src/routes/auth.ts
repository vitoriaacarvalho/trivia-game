import express from "express";
import { z } from "zod";
import { UserService } from "../services/userService";
import { UserNotFoundError, AuthenticationError, InternalServerError } from "../errors";

const router = express.Router();

router.post('/register', async (req, res) => {
    try{
        const {email, username, password} = req.body;
        await UserService.register(email, username, password);
        res.status(201).json({ message: 'User created successfully'});
    }catch(error: any){
        if (error instanceof z.ZodError) {
            res.status(400).json({ error: 'Validation failed', details: error.issues });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

router.post('/login', async (req,res) => {
    try {
        const {username, password} = req.body;
        const result = await UserService.login(username, password);
        res.status(200).json({token: result.token});
    } catch (error: any) {
        if (error instanceof UserNotFoundError || error instanceof AuthenticationError) {
            res.status(401).json({ error: error.message });
        } else if (error instanceof InternalServerError) {
            res.status(500).json({ error: error.message });
        } else {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});


export default router;