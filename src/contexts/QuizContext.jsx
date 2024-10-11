import { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const SECS_PER_QUESTION = 30;

const initialState = {
  questions: [],
  index: 0,
  answer: null,
  score: 0,
  highscore: 0,
  secondRemaining: null,
  numQuestions: 0,
  maxPossibleScore: 0,

  // loading, error, ready, active, finished
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
        numQuestions: state.questions.length,
        maxPossibleScore: state.questions.reduce(
          (acc, question) => acc + question.points,
          0
        ),
      };
    case "dataFailed":
      return { ...state, status: "error" };
    case "startQuiz":
      return {
        ...state,
        status: "active",
        secondRemaining: state.questions.length * SECS_PER_QUESTION,
      };
    case "finish":
      return {
        ...state,
        status: "finished",
        highscore:
          state.score > state.highscore ? state.score : state.highscore,
      };
    case "restart":
      return {
        ...initialState,
        status: "ready",
        questions: state.questions,
        highscore: state.highscore,
        numQuestions: state.questions.length,
        maxPossibleScore: state.questions.reduce(
          (acc, question) => acc + question.points,
          0
        ),
      };
    case "newAnswer": {
      const question = state.questions[state.index];

      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === question.correctOption
            ? state.score + question.points
            : state.score,
      };
    }
    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };
    case "tick":
      return {
        ...state,
        secondRemaining: state.secondRemaining - 1,
        status: state.secondRemaining === 0 ? "finished" : state.status,
      };
    default:
      throw new Error("Invalid action type");
  }
}

function QuizProvider({ children }) {
  const [
    {
      questions,
      status,
      index,
      answer,
      score,
      highscore,
      secondRemaining,
      numQuestions,
      maxPossibleScore,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchApi() {
      try {
        const res = await fetch("http://localhost:8000/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (error) {
        dispatch({ type: "dataFailed" });
        console.error(error);
      }
    }
    fetchApi();
    return () => {};
  }, []);

  function start() {
    dispatch({ type: "startQuiz" });
  }

  function restart() {
    dispatch({ type: "restart" });
  }

  function selectAnswer(index) {
    dispatch({ type: "newAnswer", payload: index });
  }

  function runTimer() {
    dispatch({ type: "tick" });
  }

  function nextQuestion() {
    dispatch({ type: "nextQuestion" });
  }

  function finish() {
    dispatch({ type: "finish" });
  }

  return (
    <QuizContext.Provider
      value={{
        questions,
        status,
        index,
        score,
        highscore,
        secondRemaining,
        answer,
        numQuestions,
        maxPossibleScore,
        start,
        restart,
        selectAnswer,
        runTimer,
        nextQuestion,
        finish,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
