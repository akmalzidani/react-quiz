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
    return (
      <button className="btn btn-ui" onClick={handleNext}>
        Next
      </button>
    );

  if (index === numQuestions - 1)
    return (
      <button className="btn btn-ui" onClick={handleFinish}>
        Finish
      </button>
    );
}
