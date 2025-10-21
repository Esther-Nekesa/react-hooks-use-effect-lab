import React, { useState, useEffect } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    // Stop when timer reaches 0
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10); // reset for next question
      return;
    }

    // Run timer every second
    const timerId = setTimeout(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);

    // Cleanup
    return () => clearTimeout(timerId);
  }, [timeRemaining, onAnswered]);

  return (
    <div>
      <h2>{question.prompt}</h2>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer}>{answer}</li>
        ))}
      </ul>
      <p>{timeRemaining} seconds remaining</p>
    </div>
  );
}

export default Question;
