import React from "react";
import QuizQuestion from "../QuizQuestion/index";
import useQuiz from "./hook";

const Quiz = () => {
  const {
    score,
    currentQuestion,
    currentQuestionIndex,
    quizStep,
    hasFinished,
    setScore,
    handleNextQuestion,
  } = useQuiz();

  return (
    <div className="App">
      <div className="App-header">
        <h1>Quiz</h1>
      </div>
      <div className="quiz-info">
        <h2>{quizStep}</h2>
        <h2>Your score: {score} pts</h2>
      </div>
      <div className="App-content">
        {hasFinished ? (
          <p>You finished !</p>
        ) : (
          <>
            <QuizQuestion
              key={currentQuestionIndex}
              question={currentQuestion}
              updateScore={setScore}
            />
            <button onClick={handleNextQuestion}>Next Question</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;
