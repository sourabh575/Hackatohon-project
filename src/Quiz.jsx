import React, { useState, useEffect, useRef } from 'react';
import './CSS/Quiz.css';
import allQuestions from './DATA/Q';

function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [timeLeft, setTimeLeft] = useState(20);
  const [correctCount, setCorrectCount] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const timerRef = useRef(null);
  const currentQuestion = allQuestions[currentQuestionIndex];
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        alert('Dont');
      } else {
        console.log('Welcome back to the tab!');
      }
    }
  
    document.addEventListener('visibilitychange', handleVisibilityChange);
  
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    }
  }, []);
  useEffect(() => {
    setTimeLeft(10);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [currentQuestionIndex]);

  useEffect(() => {
    if (timeLeft === 0 && selectedOption === null) {
      handleNext(); // Auto move if not answered
    }
  }, [timeLeft]);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowExplanation(true);
    clearInterval(timerRef.current);

    if (currentQuestion.options[optionIndex].isCorrect) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    clearInterval(timerRef.current);
    if (currentQuestionIndex < allQuestions.length - 1) {
      setSelectedOption(null);
      setShowExplanation(false);
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const totalQuestions = allQuestions.length;
  const percentage = Math.round((correctCount / totalQuestions) * 100);

  if (quizFinished) {
    return (
      <div className="quiz-container scoreboard">
        <h2>🎉 Quiz Completed!</h2>
        <p>You answered <strong>{correctCount}</strong> out of <strong>{totalQuestions}</strong> questions correctly.</p>
        <p>Your Score: <strong>{percentage}%</strong></p>
      </div>
    );
  }

  return (
    <div className="biggest">
      <div className="quiz-container responsive">
        <div className="question-container">
          <h2 className="question">{currentQuestion.question}</h2>
          <p className="timer">Time left: {timeLeft}s</p>
        </div>

        <div className="options-container">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`option ${
                selectedOption === index
                  ? option.isCorrect
                    ? 'correct'
                    : 'incorrect'
                  : ''
              }`}
              onClick={() => handleOptionClick(index)}
              disabled={selectedOption !== null}
            >
              <span
                className={`indicator ${
                  selectedOption === index
                    ? option.isCorrect
                      ? 'correct-indicator'
                      : 'incorrect-indicator'
                    : ''
                }`}
              ></span>
              {option.text}
            </button>
          ))}
        </div>

        {showExplanation && (
          <div className="explanation-container">
            <h3 className="explanation-title">Explanation</h3>
            <p className="explanation-text">{currentQuestion.explanation}</p>
            <button className="next-button" onClick={handleNext}>
              {currentQuestionIndex < allQuestions.length - 1 ? 'Next' : 'Finish'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;
