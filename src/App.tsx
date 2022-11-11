import { useEffect, useState } from "react";
import "./App.css";
import { LostMessage } from "./components/LostMessage";
import { Streak } from "./components/Streak";
import { WonMessage } from "./components/WonMessage";
import { Word } from "./components/Word";
import { WrongGuesses } from "./components/WrongGuesses";
function App() {
  const [letters, setLetters] = useState("abcdefghijklmnopqrstuvwxyz");
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
  const [word, setWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState<string[]>([]);
  const [streak, setStreak] = useState(0);

  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }
  function restart() {
    setGuesses([]);
    setWord(getRandomWord());
  }

  let wrongGuesses = guesses.filter((guess) => !word.includes(guess));
  let correctGuesses = guesses.filter((guess) => word.includes(guess));
  const lives = 5 - wrongGuesses.length;

  const userLost = lives === 0;
  const userWon = word.split("").every((char) => correctGuesses.includes(char));

  useEffect(() => {
    if (userLost || userWon) return;
    function handleKeyDown(event: any) {
      let guess = event.key.toLowerCase();
      if (!letters.includes(guess)) return;
      if (guesses.includes(guess)) return;
      setGuesses([...guesses, guess]);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [guesses, userLost, userWon]);
  return (
    <div className="App">
      <Word correctGuesses={correctGuesses} word={word} />
      <WrongGuesses wrongGuesses={wrongGuesses} />
      {userLost ? (
        <LostMessage restart={restart} setStreak={setStreak} word={word} />
      ) : null}
      {userWon ? (
        <WonMessage restart={restart} setStreak={setStreak} streak={streak} />
      ) : null}

      <Streak streak={streak} />
    </div>
  );
}

export default App;
