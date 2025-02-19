import { useState } from "react";
import NewButton from "./newButton";

const NewCounter = () => {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  const minus = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h2>New Counter</h2>
      <p>{count}</p>
      <NewButton title="Plus 1" clickFunction={add}></NewButton>
      <NewButton title="Minus 1" clickFunction={minus}></NewButton>
    </>
  );
};

export default NewCounter;
