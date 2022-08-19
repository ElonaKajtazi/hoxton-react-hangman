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
  function getRandomWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    return words[randomIndex];
  }

  return (
    <div className="App">
      <h1>hello</h1>
    </div>
  );
}

export default App;
