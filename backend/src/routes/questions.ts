import express from "express";
import { QuestionsController } from "../controllers/questionsController";

const router = express.Router();

router.get('/category/:categoryId', QuestionsController.getQuestionsByCategory);
router.get('/difficulty/:difficulty', QuestionsController.getQuestionsByDifficulty);
router.get('/category/:categoryId/difficulty/:difficulty', QuestionsController.getQuestionsByCategoryAndDifficulty);

export default router;
