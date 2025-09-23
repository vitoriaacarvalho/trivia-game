import { Difficulty } from "@prisma/client";
import { QuestionOutput } from "../models/questions";
import * as questionModule from "../database/questionModule";

export class QuestionService {
    static async getQuestionsByCategory(categoryId: string): Promise<QuestionOutput[] | null> {
        return await questionModule.getQuestionsByCategory(categoryId);
    }

    static async getQuestionsByDifficulty(difficulty: Difficulty): Promise<QuestionOutput[] | null> {
        return await questionModule.getQuestionsByDifficulty(difficulty);
    }

    static async getQuestionsByCategoryAndDifficulty(categoryId: string, difficulty: Difficulty): Promise<QuestionOutput[] | null> {
        return await questionModule.getQuestionsByCategoryAndDifficulty(categoryId, difficulty);
    }
}