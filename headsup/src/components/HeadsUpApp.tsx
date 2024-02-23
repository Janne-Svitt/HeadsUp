import { useState } from "react";
import "./CardContainer.css";

const Dogs = ['tax', 'dalmatin', 'pudel', 'labrador', 'fransk bulldog', 'doberman', 'golden retriver', 'schäfer', 'corgi', 'st bernard'];

const Shuffle = (dogs: string[]) => {
    let m = dogs.length;
    while (m) {
        const i = Math.floor(Math.random() * m--);
        [dogs[m], dogs[i]] = [dogs[i], dogs[m]];
    }
    return dogs;
};

export const HeadsUpApp = () => {
    const [score, setScore] = useState(0);
    const [currentDog, setCurrentDog] = useState(0);

    const handleRightButtonClick = () => {
        setScore(score + 1);
        const shuffledDogs = Shuffle([...Dogs]);
        setCurrentDog(currentDog === shuffledDogs.length - 1 ? 0 : currentDog + 1);
    };

    const handleLeftButtonClick = () => {
        const shuffledDogs = Shuffle([...Dogs]);
        setCurrentDog(currentDog === shuffledDogs.length - 1 ? 0 : currentDog + 1);
    };

    return (
        <>
            <h1>Heads Up Dogs!</h1>
            <section className="grid grid-cols-6 h-[30vw] w-[50vw] border">
                <button onClick={handleLeftButtonClick}>Wrong!</button>
                <div className="size-full col-span-4">{Dogs[currentDog]}</div>
                <button onClick={handleRightButtonClick}>Right!</button>
            </section>
            <section>
                <p className=" text-9xl">Score: {score}</p>
            </section>
        </>
    );
};

export default HeadsUpApp;
