import { useQuiz } from "../contexts/QuizContext";
import Options from "./Options";

export default function Questions() {
  const { questions, index } = useQuiz();
  const currentQuestion = questions[index];

  return (
    <div>
      <h4>{currentQuestion.question}</h4>
      <Options question={currentQuestion} />
    </div>
  );
}
