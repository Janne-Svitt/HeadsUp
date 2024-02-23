import { useState } from "react";
import { GameOver } from "./GameOver";

interface IGameContainerProps {
  dogs: {
    url: "string";
    name: "string";
  }[];
}

export const GameContainer = (props: IGameContainerProps) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);

  const handleRightButtonClick = () => {
    setCounter(counter + 1);
    setScore(score + 1);
  };

  const handleLeftButtonClick = () => {
    setCounter(counter + 1);
  };

  if (counter < props.dogs.length) {
    return (
      <>
        <div className="size-full col-span-4 mb-4 text-2xl ">
          {props.dogs[counter].name}
        </div>
        <section className="grid grid-cols-6 h-[50dvh] w-[50vw] border relative bg-slate-100">
          <button onClick={handleLeftButtonClick} className="bg-red-100">
            Wrong!
          </button>
          <div className="col-span-4 my-auto">
            <img src={props.dogs[counter].url} className="object-conntainer" />
          </div>

          <button onClick={handleRightButtonClick} className="bg-green-100">
            Right!
          </button>
        </section>
        <section>
          <p className=" text-7xl mt-6">Score: {score}</p>
        </section>
      </>
    );
  } else {
    return <GameOver score={score} />;
  }
};
