import { Request, Response } from "express";
import { QuestionService } from "../services/questionService";
import { Difficulty } from "@prisma/client";

export class QuestionsController {
    static async getQuestionsByCategory(req: Request, res: Response) {
        const { categoryId } = req.params;
        const questions = await QuestionService.getQuestionsByCategory(categoryId);
        res.json(questions);
    }

    static async getQuestionsByDifficulty(req: Request, res: Response) {
        const { difficulty } = req.params;
        const questions = await QuestionService.getQuestionsByDifficulty(difficulty as Difficulty);
        res.json(questions);
    }

    static async getQuestionsByCategoryAndDifficulty(req: Request, res: Response) {
        const { categoryId, difficulty } = req.params;
        const questions = await QuestionService.getQuestionsByCategoryAndDifficulty(categoryId, difficulty as Difficulty);
        res.json(questions);
    }
}   