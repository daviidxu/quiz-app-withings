import React from "react";
import { useQuestion } from "./hook";
import "./style.css";

const QuizQuestion = ({ question, updateScore }) => {
  const { selectedAnswer, answers, showResults, handleAnswerClick } =
    useQuestion(question, updateScore);

  return (
    <div className="question-container">
      <p className="question">{question?.question?.text}</p>
      <ul>
        {answers.map((answer, index) => (
          <li
            key={index}
            className={`answer ${
              showResults
                ? answer === question.correctAnswer
                  ? "correct"
                  : answer === selectedAnswer
                  ? "incorrect"
                  : "default"
                : "default"
            }`}
            onClick={() => handleAnswerClick(answer)}
          >
            {answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizQuestion;
