interface ICardContainerProps {
  ChangeCardHandlerAdd: () => void;
  ChangeCardHandlerDecrease: () => void;
  changeCard: number;
}

const CardContainer = (props: ICardContainerProps) => {
  return (
    <>
      <section className="grid grid-cols-6 h-[30vw] w-[50vw] border">
        <button onClick={props.ChangeCardHandlerDecrease}>Fel</button>
        <div className=" bg-white size-full col-span-4"></div>
        <button onClick={props.ChangeCardHandlerAdd}>Rätt</button>
      </section>
      <section>
        <p className=" text-9xl">{props.changeCard}</p>
      </section>
    </>
  );
};

export default CardContainer;
