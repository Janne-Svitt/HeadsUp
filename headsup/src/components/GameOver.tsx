interface IGameOverProps {
  score: number;
}

export const GameOver = (props: IGameOverProps) => {
  return (
    <>
      <div className="flex flex-col">
        <span>Thank you for playing!</span>
        <span>
          You got <span className="font-bold">{props.score}</span> points!
        </span>
        <button className="mt-4">
          <a href="/">Play Again!</a>
        </button>
      </div>
    </>
  );
};
