import React, { useState } from "react";
import Question from "./components/Question";

function App() {
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

  const questions = [
    {
      id: 1,
      prompt: "What is the capital of France?",
      answers: ["Paris", "London", "Rome", "Madrid"],
    },
    {
      id: 2,
      prompt: "Which planet is known as the Red Planet?",
      answers: ["Earth", "Mars", "Jupiter", "Venus"],
    },
  ];

  function handleAnswered(isCorrect) {
    setIndex((index) => index + 1);
    if (isCorrect) setCorrect((correct) => correct + 1);
  }

  return (
    <main>
      <h1>Trivia!</h1>
      {index < questions.length ? (
        <Question question={questions[index]} onAnswered={handleAnswered} />
      ) : (
        <h2>
          You scored {correct} out of {questions.length}
        </h2>
      )}
    </main>
  );
}

export default App;
