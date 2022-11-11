type Props = {
  wrongGuesses: string[];
};
export function WrongGuesses({ wrongGuesses }: Props) {
  return (
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
          : wrongGuesses.length === 5
          ? "lost"
          : "mistakes"
      }
    >
      Wrong guesses:{wrongGuesses} ({wrongGuesses.length})
    </div>
  );
}
