import { useEffect } from "react";
import { useQuiz } from "../contexts/QuizContext";
import BaseButton from "./BaseButton";

export default function StartScreen() {
  const { numQuestions, start } = useQuiz();

  useEffect(() => {
    console.log(numQuestions);
  }, [numQuestions]);

  function handleStart(e) {
    e.preventDefault();
    start();
  }

  return (
    <div className="start">
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React Mastery!</h3>
      <BaseButton onClick={handleStart}>Let&apos;s start</BaseButton>
    </div>
  );
}
