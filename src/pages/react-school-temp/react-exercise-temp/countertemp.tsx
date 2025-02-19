import { useState } from "react";
//inte bara värde i useState, experessions där i
const Counter = () => {
  const [count, setCount] = useState(0);
  //  let x = 0;
  return (
    <div>
      <h2>Old Counter</h2>
      <p>{count}</p>
      <button
        onClick={() => {
          console.log(count);
          setCount(count + 1);
        }}
      >
        Plus 1
      </button>
      <button
        onClick={() => {
          console.log(count);
          setCount(count - 1);
        }}
      >
        Minus 1
      </button>
    </div>
  );
};
export default Counter;
