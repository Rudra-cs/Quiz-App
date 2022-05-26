import React from "react";
import QuestionList from "../data/questions.json";
import { useState } from "react";
import QuizResult from "./QuizResult.js";
import Question from "./Question.js";

export default function QuizScreen({ retry }) {
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [markedAnswers, setMarkedAnswers] = useState(
    new Array(QuestionList.length)
  );

  function calculateResult() {
    let correct = 0;
    QuestionList.forEach((question, index) => {
      if (question.correctOptionIndex === markedAnswers[index]) {
        correct++;
        console.log(correct);
      }
    });
    return {
      total: QuestionList.length,
      correct: correct,
      percentage: Math.trunc((correct / QuestionList.length) * 100),
    };
  }
  const isQuestionEnd = currentQuestionIndex === QuestionList.length;
  return (
    <div className="quiz-screen">
      {isQuestionEnd ? (
        <QuizResult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={QuestionList[currentQuestionIndex]}
          totalQuestions={QuestionList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setMarkedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex - 1] = index;
              return newArr;
            });
            setcurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
}
