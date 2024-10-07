/* eslint-disable react/prop-types */
export default function NextButton({ dispatch, answer }) {
  if (answer === null) {
    return null;
  }

  function handleNext() {
    return dispatch({ type: "nextQuestion" });
  }

  return (
    <button className="btn btn-ui" onClick={handleNext}>
      Next
    </button>
  );
}
