import { z } from "zod";

export const questionsSchema = z.object({
  question: z.string(),
  categoryId: z.string(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD", "APOCALYPTIC"]),
});

export const questionsSchemaOutput = z.object({
  id: z.string(),
  question: z.string(),
  categoryId: z.string(),
  difficulty: z.enum(["EASY", "MEDIUM", "HARD", "APOCALYPTIC"]),
  createdAt: z.date().optional(),
  updatedAt: z.date().optional(),
});

export type QuestionInput = z.infer<typeof questionsSchema>;

export type QuestionOutput = z.infer<typeof questionsSchemaOutput>;
