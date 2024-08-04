import { Link } from 'react-router-dom';
import { Button } from '../../components/Button';
import style from './style.module.css';
import { FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <main className={style.main}>
      <div className={style.content}>
        <h1 className={style.title}>Quiz Engine</h1>
        <Button size='large'>
          <Link to="/quiz">Start Quiz</Link>
        </Button>
      </div>
      <div className={style.footer}>
        <Button size='small' outline>
          <FaGithub />
          <a href="https://github.com/MacariniProg/quiz-engine" target='_blanck'>Repository</a>
        </Button>
      </div>
    </main>
  );
}