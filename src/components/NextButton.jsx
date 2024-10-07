import BaseButton from "./BaseButton";

/* eslint-disable react/prop-types */
export default function NextButton({ dispatch, answer, index, numQuestions }) {
  if (answer === null) {
    return null;
  }

  function handleNext() {
    return dispatch({ type: "nextQuestion" });
  }

  function handleFinish() {
    return dispatch({ type: "finish" });
  }

  if (index < numQuestions - 1)
    return <BaseButton onClick={handleNext}>Next</BaseButton>;

  if (index === numQuestions - 1)
    return <BaseButton onClick={handleFinish}>Finish</BaseButton>;
}
