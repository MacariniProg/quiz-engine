export interface QuestionI {
  id: number;
  type: 'one-choice' | 'multiple-choice' | 'input';
  title: string;
  description: string;
  image: string;
  question: string;
  options?: string[];
  next_question_id?: number;
}