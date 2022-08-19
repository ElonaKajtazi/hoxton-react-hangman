import { useState } from "react";
import "./App.css";

function App() {
  const [words, setWords] = useState([
    "javascript",
    "typescript",
    "react",
    "chair",
    "table",
    "pen",
    "book",
    "mouse",
    "keyboard",
    "monitor",
    "laptop",
    "cellphone",
    "headphones",
    "camera",
    "speaker",
    "microphone",
    "apple",
    "microsoft",
    "google",
    "amazon",
    "facebook",
    "potato",
    "tomato",
    "banana",
    "orange",
    "pear",
    "grape",
    "strawberry",
    "call",
    "text",
    "email",
    "sms",
    "message",
    "map",
    "navigation",
    "location",
    "address",
    "place",
    "placeholder",
    "search",
  ]);
  const [mistakes, setMistakes] = useState(5);
  const [characters, setCharacters] = useState([]);
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  // function getMistakes() {
  //   let mistakes = characters.filter(
  //     (char) => !words.map((word) => word.includes(char))
  //   );
  //   return mistakes;
  // }
  // function getMistakeCount() {
  //   let mistakes = getMistakes();
  //   return mistakes.length;
  // }
  // // function getCorrectGuesses() {
  //   let correctGuesses = characters.filter((char) =>
  //     state.word.includes(char)
  //   );
  //   return correctGuesses;
  // }
  const charactersInWord = getRandomWord().split("");
  return (
    <div className="App">
      <div className="word">
        {charactersInWord.map((char) => (
          <span className="char">_</span>
        ))}
      </div>
      <div className="mistakes">Wrong guesses: (0)</div>
      <div className="streak">Streak: 0</div>
    </div>
  );
}

export default App;
