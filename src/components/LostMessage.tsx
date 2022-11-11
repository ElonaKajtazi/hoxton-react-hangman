type Props = {
  word: string;
  restart: () => void;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
};
export function LostMessage({ word, restart, setStreak }: Props) {
  return (
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
  );
}
