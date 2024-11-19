import { useEffect, useState } from "react";

export const useQuestion = (question, updateScore) => {
  const [answers, setAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (question) {
      const incorrectAnswers = question?.incorrectAnswers;
      const shuffledAnswers = incorrectAnswers?.toSpliced(
        Math.random() * 3,
        0,
        question?.correctAnswer
      );
      setAnswers(shuffledAnswers);
    }
  }, [question]);

  const handleAnswerClick = (answer) => {
    if (!showResults) {
      if (answer === question.correctAnswer) {
        updateScore((prevScore) => prevScore + 1);
      }
      setSelectedAnswer(answer);
      setShowResults(true);
    }
  };

  return {
    selectedAnswer,
    answers,
    showResults,
    handleAnswerClick,
  };
};
