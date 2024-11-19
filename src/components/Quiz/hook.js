import { useEffect, useState } from "react";

const useQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const fetchQuestions = async () => {
    const response = await fetch("https://the-trivia-api.com/v2/questions"); // TODO: do the API call to Triva here
    const data = await response.json();

    setQuestions(data.slice(0, 5)); // TODO keep questions from the API
    setCurrentQuestion(data[currentQuestionIndex]); // TODO get the first question to display it
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  return {
    score,
    questions,
    currentQuestion,
    currentQuestionIndex,
    quizStep: `${currentQuestionIndex}/${questions.length}`,
    hasFinished: currentQuestionIndex === questions.length,
    setScore,
    handleNextQuestion,
  };
};

export default useQuiz;
