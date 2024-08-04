import { useEffect, useReducer } from 'react';
import questions from '../../api/questions-1.json'
import { QuestionI } from '../../type/Quiz';
import { Loading } from '../../components/Loading';

interface State {
  loading: boolean;
  data?: QuestionI[];
}

interface Action {
  type: 'FETCH_SUCCESS' | 'FETCH_ERROR';
  payload?: QuestionI[];
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        dispatch({ type: 'FETCH_SUCCESS', payload: questions as QuestionI[] });
      } catch (error) {
        dispatch({ type: 'FETCH_ERROR' });
      }
    };
    fetchData();
  }, []);

  if (state.loading) return <Loading />

  return (
    <div>quiz</div>
  );
}