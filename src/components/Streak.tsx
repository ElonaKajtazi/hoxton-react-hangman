type Props = {
    streak: number
}
export function Streak({streak}: Props) {
  return <div className="streak">Streak: {streak}</div>;
}
