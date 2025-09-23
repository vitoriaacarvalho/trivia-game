import { Difficulty, Prisma, PrismaClient } from "@prisma/client";
import { QuestionOutput } from "../models/questions";

const prisma = new PrismaClient();

export const questionEntity = prisma.question;

export async function getQuestionsByCategory(categoryId: string): Promise<QuestionOutput[] | null> {
    const questions = await questionEntity.findMany({
        where: {
            categoryId: categoryId,
        },
    });
    return questions.map(_toQuestion);
}

export async function getQuestionsByDifficulty(difficulty: Difficulty): Promise<QuestionOutput[] | null> {
    const questions = await questionEntity.findMany({
        where: {
            difficulty: difficulty,
        },
    });
    return questions.map(_toQuestion);
}

export async function getQuestionsByCategoryAndDifficulty(categoryId: string, difficulty: Difficulty): Promise<QuestionOutput[] | null> {
    const questions = await questionEntity.findMany({
        where: {
            categoryId: categoryId,
            difficulty: difficulty,
        },
    });
    return questions.map(_toQuestion);
}

function _toQuestion(question: Prisma.QuestionGetPayload<Prisma.QuestionCreateArgs>): QuestionOutput {
    return {
        id: question.id,
        question: question.question,
        categoryId: question.categoryId,
        difficulty: question.difficulty,
    };
}