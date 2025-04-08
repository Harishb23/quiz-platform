import React, { useEffect, useState } from 'react';
import './Quiz.css';

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  useEffect(() => {
    const sampleQuestions = [
     
        {
            question: "What is the capital of France?",
            options: ["Paris", "London", "Rome", "Berlin"],
            answer: "Paris",
          },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars",
      },
      {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: "Pacific Ocean",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare",
      },
      {
        question: "What is the boiling point of water?",
        options: ["100°C", "90°C", "80°C", "70°C"],
        answer: "100°C",
      },
    ];
    setQuestions(sampleQuestions);
  }, []);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
      setFeedback("✅ Correct!");
      setScore(score + 1);
      if (currentQuestionIndex + 1 < questions.length) {
        setTimeout(() => {
          setCurrentQuestionIndex(currentQuestionIndex + 1);
          setFeedback("");
        }, 1000);
      } else {
        setQuizFinished(true);
      }
    } else {
      setFeedback("❌ arivuiruka da mutapuda.");
    }
  };

  if (questions.length === 0) return <div>Loading questions...</div>;

  if (quizFinished) {
    return (
      <div className="quiz-container">
        <h2>Quiz Completed 🎉</h2>
        <p>Your Score: {score} / {questions.length}</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <h2>React Quiz App</h2>
      <div className="question-box">
        <p><strong>Question {currentQuestionIndex + 1}:</strong> {currentQuestion.question}</p>
        <div className="options">
          {currentQuestion.options.map((option, index) => (
            <button key={index} onClick={() => handleAnswer(option)}>
              {option}
            </button>
          ))}
        </div>
        <p className="feedback">{feedback}</p>
      </div>
    </div>
  );
};

export default Quiz;
