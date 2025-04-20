import React, { useState } from 'react';
import './CSS/Quiz.css';
import allQuestions from './DATA/Q';


function Quiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQuestion = allQuestions[currentQuestionIndex];

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);
    setShowExplanation(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setShowExplanation(false);
    setCurrentQuestionIndex((prev) => prev + 1);
  };

  return (
    <div className="quiz-container responsive">
      <div className="question-container">
        <h2 className="question">{currentQuestion.question}</h2>
      </div>
      <div className="options-container">
        {currentQuestion.options.map((option, index) => (
          <button
            key={index}
            className={`option ${selectedOption === index ? (option.isCorrect ? 'correct' : 'incorrect') : ''}`}
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
          {currentQuestionIndex < allQuestions.length - 1 ? (
            <button className="next-button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <p className="end-text">You've completed the quiz!</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Quiz;
