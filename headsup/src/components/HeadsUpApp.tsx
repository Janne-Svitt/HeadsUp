import "./CardContainer.css";
import { GameContainer } from "./GameContainer";
import bernardImg from "../img/bernard.jpg";
import corgiImg from "../img/corgi.jpg";
import dalmatinImg from "../img/dalmatin.jpg";
import dobbermanImg from "../img/dobberman.jpg";
import frallaImg from "../img/fralla.jpg";
import goldenImg from "../img/golden.jpg";
import labradorImg from "../img/labrador.jpg";
import pudelImg from "../img/pudel.jpg";
import schaferImg from "../img/schafer.jpg";
import taxImg from "../img/tax.jpg";

export const HeadsUpApp = () => {
  const dogs = [
    { url: bernardImg, name: "st Bernard" },
    { url: corgiImg, name: "Corgi" },
    { url: dalmatinImg, name: "Dalmatin" },
    { url: dobbermanImg, name: "Dobberman" },
    { url: frallaImg, name: "French bulldog" },
    { url: goldenImg, name: "Golden retriever" },
    { url: labradorImg, name: "Labrador" },
    { url: pudelImg, name: "Pudel" },
    { url: schaferImg, name: "Schäfer" },
    { url: taxImg, name: "Tax" },
  ];

  const copyDogArray = [...dogs];
  const newRandomDogArray: any = [];

  while (copyDogArray.length > 0) {
    const randomIndex = Math.floor(Math.random() * copyDogArray.length);
    newRandomDogArray.push(copyDogArray[randomIndex]);
    copyDogArray.splice(randomIndex, 1);
  }

  return (
    <>
      <h1 className="mb-6">Heads Up Dogs!</h1>
      <GameContainer dogs={newRandomDogArray} />
    </>
  );
};

export default HeadsUpApp;
