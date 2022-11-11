import { useEffect, useState } from "react";
import "./App.css";
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
    <div className="App" onKeyUp={() => {}}>
      {/* <h1>REACT VERSION OF THIS GAME</h1> */}
      <div className="word">
        {word.split("").map((char, index) => (
          <span key={index}>{correctGuesses.includes(char) ? char : "_"} </span>
        ))}
      </div>
      <div
        className={
          wrongGuesses.length === 0
            ? "mistakes"
            : wrongGuesses.length === 1
            ? "mistakes-warning"
            : wrongGuesses.length === 2
            ? "more-mistakes-warning"
            : wrongGuesses.length === 3
            ? "mistakes-danger"
            : wrongGuesses.length === 4
            ? "almost-lost"
            : "lost"
        }
      >
        Wrong guesses:{wrongGuesses} ({wrongGuesses.length})
      </div>
      {userLost ? (
        <>
          <div className="message">
            <p>You lose! ☹️ The word was {word}</p>
            <button
              className="restart-button"
              onClick={() => {
                restart();
                setStreak(0);
              }}
            >
              RESTART
            </button>
          </div>
        </>
      ) : null}
      {userWon ? (
        <div className="message">
          <p>You win! 🎉</p>
          <button
            className="restart-button"
            onClick={() => {
              restart();
              let streakCopy = structuredClone(streak);
              streakCopy++;
              setStreak(streakCopy);
            }}
          >
            RESTART
          </button>
        </div>
      ) : null}

      <div className="streak">Streak: {streak}</div>
    </div>
  );
}

export default App;
