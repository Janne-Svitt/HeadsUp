import { useState } from "react";
import "./App.css";
import CardContainer from "./component/CardContainer";

function App() {
  const [changeCard, setChangeCard] = useState(0);

  function ChangeCardHandlerAdd() {
    return setChangeCard(changeCard + 1);
  }
  function ChangeCardHandlerDecrease() {
    return setChangeCard(changeCard - 1);
  }
  return (
    <CardContainer
      ChangeCardHandlerAdd={ChangeCardHandlerAdd}
      ChangeCardHandlerDecrease={ChangeCardHandlerDecrease}
      changeCard={changeCard}
    />
  );
}

export default App;
