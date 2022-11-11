type Props = {
  word: string;
  correctGuesses: string[];
};
export function Word({ word, correctGuesses }: Props) {
  return (
    <div className="word">
      {word.split("").map((char, index) => (
        <span key={index}>{correctGuesses.includes(char) ? char : "_"} </span>
      ))}
    </div>
  );
}
