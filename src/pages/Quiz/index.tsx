import React, { useEffect, useReducer, useState } from 'react';
import quizJSON from '../../api/quiz1.json'
import { QuestionType, QuizI } from '../../type/Quiz';
import { Loading } from '../../components/Loading';
import style from './style.module.css';
import { ProgressBar } from '../../components/ProgressBar';
import { Button } from '../../components/Button';
import { OneChoice } from '../../components/Questions/OneChoice';
import { Input } from '../../components/Questions/Input';
import { MultipleChoice } from '../../components/Questions/MultipleChoice';

interface State {
  loading: boolean;
  data?: QuizI;
}
interface Action {
  type: 'FETCH_SUCCESS' | 'FETCH_ERROR';
  payload?: QuizI;
}
const initialState: State = {
  loading: true,
};
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export const Quiz = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [questionId: number]: number | number[] | string }>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        // await new Promise(resolve => setTimeout(resolve, 1000));
        dispatch({ type: 'FETCH_SUCCESS', payload: quizJSON as QuizI });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };
    fetchData();
  }, []);

  const handleQuestionType = () => {
    const question = quiz.questions[questionIndex];
    const component: Record<QuestionType, React.ReactNode> = {
      'one-choice': <OneChoice question={question} />,
      'multiple-choice': <MultipleChoice question={question} />,
      'input': <Input question={question} />
    };
    if (!question) return null;
    return component[question.type];
  }

  if (state.loading) return <Loading />
  // Create page for error on API fetch
  if (!state.data) return null;
  const quiz = state.data;

  return (
    <div className={style.container}>
      <header>
        <h1>{quiz.title}</h1>
        <h3>{quiz.description}</h3>
      </header>

      <ProgressBar
        value={questionIndex}
        max={quiz.questions.length}
      />

      <form className={style.question}>
        {handleQuestionType()}
      </form>

      <div className={style.footer}>
        <div>
          {questionIndex != 0 && <Button outline onClick={() => setQuestionIndex(prev => prev - 1)}>Preview</Button>}
        </div>
        <div>
          {questionIndex != quiz.questions.length
            ? <Button onClick={() => setQuestionIndex(prev => prev + 1)}>Next</Button>
            : <Button>Submit</Button>
          }
        </div>
      </div>
    </div>

  );
}