import { useEffect, useState } from "react";
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
  const [maxMistakes, setMaxMistakes] = useState(5);
  const charactersInWord = getRandomWord().split("");
  const [characters, setCharacters] = useState(charactersInWord);
  const [mistakes, setMistakes] = useState(!charactersInWord.length);
  const [guesses, setGuesses] = useState([]);
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  function checkIfUserWon() {
    // are all the letters in state.word in state.characters?
    for (let char of characters) {
      if (characters.includes(char)) return false;
    }

    // We know that every single letter in the word is in the characters array
    return true;

    // approach 2: using array.every
    // state.word.split("").every((char) => state.characters.includes(char));
  }
  function getMistakes() {
    let mistakes = characters.filter(
      (char) => !words.map((word) => word.includes(char))
    );
    return mistakes;
  }

  //Count the letters in state.guessedLetters that ARE NOT in state.word ✅
  function getMistakeCount() {
    let mistakes = getMistakes();
    return mistakes.length;
  }
  function checkIfUserLost() {
    return getMistakeCount() >= maxMistakes;
  }
  // function getGuessedLetters() {
  //   let guessedLetters = characters.filter(
  //     (char) => !words.map((word) => word.includes(char))
  //   );
  //   return guessedLetters;
  // }
  useEffect(() => {
    function handleKeyUp(event) {
      let guess = event.key.toLowerCase();

      let letters = "abcdefghijklmnopqrstuvwxyz";
      // GUARD STATEMENTS
      //1. No sppecial characters should be allowed onluy letters a-z
      if (!letters.includes(guess)) return;

      //2. No duplicate letters should be allowed
      if (characters.includes(guess)) return;
      // //3. If the user lost, don't allow them to guess anymore
      if (checkIfUserLost()) return;
      //4. If the user won, don't allow them to guess anymore
      if (checkIfUserWon()) return;
      // This only happens if all the guard statements are FALSE
      // setCharacters([...characters, guess]);
      // state.characters.push(guess);
      let charactersCopy = structuredClone(characters);
      charactersCopy.push(guess);
      setCharacters(charactersCopy);
      console.log(charactersCopy);
    }

    window.addEventListener("keyup", handleKeyUp);
    return () => window.removeEventListener("keyup", handleKeyUp);
  }, [guesses]);
  return (
    <div
      className="App"
    >
      <h1>REACT VERSION OF THIS GAME</h1>
      <div className="word">
        {charactersInWord.map((char) => (
          <span className="char">_</span>
        ))}
      </div>
      <div className="mistakes">Wrong guesses:({mistakes})</div>
      <div className="streak">Streak: 0</div>
    </div>
  );
}

export default App;
