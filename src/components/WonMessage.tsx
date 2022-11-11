type Props = {
  restart: () => void;
  streak: number;
  setStreak: React.Dispatch<React.SetStateAction<number>>;
};
export function WonMessage({ restart, streak, setStreak }: Props) {
  return (
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
  );
}
