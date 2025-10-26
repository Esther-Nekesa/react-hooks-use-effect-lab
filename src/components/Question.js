import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup: stop the timer when re-rendering or unmounting
    return () => clearTimeout(timeout);
  }, [timeRemaining]);

  // When timer hits 0
  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10);
    }
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <div>
        {question.answers.map((answer) => (
          <button
            key={answer}
            onClick={() => onAnswered(answer === question.correctAnswer)}
          >
            {answer}
          </button>
        ))}
      </div>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
