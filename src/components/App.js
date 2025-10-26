import React, { useState } from "react";
import Question from "./Question";

const QUESTIONS = [
  {
    id: 1,
    prompt: "What is the capital of France?",
    answers: ["Paris", "Madrid", "Berlin", "Rome"],
    correctAnswer: "Paris",
  },
  {
    id: 2,
    prompt: "Which planet is known as the Red Planet?",
    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    id: 3,
    prompt: "Who wrote 'To Kill a Mockingbird'?",
    answers: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
    correctAnswer: "Harper Lee",
  },
];

function App() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);

  function handleAnswer(isCorrect) {
    // Update score if correct
    if (isCorrect) {
      setScore(score + 1);
    }

    // Move to next question (or reset if done)
    const nextIndex = index + 1;
    if (nextIndex < QUESTIONS.length) {
      setIndex(nextIndex);
    } else {
      alert(
        `Quiz complete! Your final score is ${score + (isCorrect ? 1 : 0)}.`
      );
      setIndex(0);
      setScore(0);
    }
  }

  return (
    <div className="app">
      <h1>Trivia Game 🎯</h1>
      <p>Score: {score}</p>
      <Question question={QUESTIONS[index]} onAnswered={handleAnswer} />
    </div>
  );
}

export default App;
