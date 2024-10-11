import { useQuiz } from "../contexts/QuizContext";

export default function Progress() {
  const { index, numQuestions, score, answer, maxPossibleScore } = useQuiz();

  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        <strong>{score}</strong> / {maxPossibleScore}
      </p>
    </header>
  );
}
