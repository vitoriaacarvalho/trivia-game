import { Request, Response } from "express";
import { QuestionService } from "../services/questionService";
import { Difficulty } from "@prisma/client";

export class QuestionsController {
    static async getQuestionsByCategory(req: Request, res: Response) {
        try {
            const { categoryId } = req.params;
            if(!categoryId) return res.status(400).json({ error: "Error fetching questions by category: category id doesn't exist" });

            const questions = await QuestionService.getQuestionsByCategory(categoryId);
            return res.json(questions);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    static async getQuestionsByDifficulty(req: Request, res: Response) {
        try {
            const { difficulty } = req.params;      
            if(!difficulty)  
                return res.status(400).json({ error: "Error fetching questions by difficulty." });
            const questions = await QuestionService.getQuestionsByDifficulty(difficulty as Difficulty);
            return res.json(questions);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    static async getQuestionsByCategoryAndDifficulty(req: Request, res: Response) {
        try {
            const { categoryId, difficulty } = req.params;
            if(!categoryId) return res.status(400).json({ error: "Error fetching questions by category and difficulty: category id doesn't exist" });
            if(!difficulty) return res.status(400).json({ error: "Error fetching questions by category and difficulty: difficulty doesn't exist" });
            const questions = await QuestionService.getQuestionsByCategoryAndDifficulty(categoryId, difficulty as Difficulty);
            return res.json(questions);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }
}   