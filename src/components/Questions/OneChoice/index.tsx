import { Question } from "..";
import { QuestionI } from "../../../type/Quiz";
import style from './style.module.css';


export function OneChoice({ question }: { question: QuestionI }) {
  return (
    <Question
      title={question.title}
      description={question.description}
      image={question.image}
    >
      <h1>{question.question}</h1>
      <div className={style.container}>
        {
          question?.options?.map((option) => {
            return (
              <div key={option.id} className={style.radio}>
                <input type="radio" name={question.type + '_' + question.id} value={option.id} id={option.id.toString()} />
                <label htmlFor={option.id.toString()}>{option.value}</label>
              </div>
            )
          })
        }
      </div>
    </Question >
  )
}