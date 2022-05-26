import { useState } from "react";
import QuizScreen from "./components/QuizScreen.js";
import JoinScreen from "./components/JoinScreen.js";
import Navbar from "./components/Navbar.js";

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false);

  return (
    <>
      <Navbar />
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <JoinScreen start={() => setIsQuizStarted(true)} />
        )}
      </div>
    </>
  );
}

export default App;
