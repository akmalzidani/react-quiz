import { useQuiz } from "../contexts/QuizContext";
import BaseButton from "./BaseButton";

export default function NextButton() {
  const { answer, index, numQuestions, nextQuestion, finish } = useQuiz();

  if (answer === null) {
    return null;
  }

  function handleNext() {
    nextQuestion();
  }

  function handleFinish() {
    finish();
  }

  if (index < numQuestions - 1)
    return <BaseButton onClick={handleNext}>Next</BaseButton>;

  if (index === numQuestions - 1)
    return <BaseButton onClick={handleFinish}>Finish</BaseButton>;
}
