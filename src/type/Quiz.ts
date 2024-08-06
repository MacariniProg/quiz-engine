export interface QuizI {
  id: number;
  title: string;
  description: string;
  questions: QuestionI[];
}

export type QuestionType = 'one-choice' | 'multiple-choice' | 'input';

export interface QuestionI {
  id: number;
  title?: string;
  description?: string;
  image?: string;
  question: string;
  type: QuestionType;
  // Option undefined for input type
  options?: Array<{
    id: number;
    value: string;
    conditionaryQuestion?: {
      id: number;
      question: string;
      type: QuestionType;
      options?: Array<{ id: number; value: string }>
    }
  }>;
  nextQuestionId?: number;
  lastQuestion?: boolean;
}