import { useState } from "react";

export default function InputDemo() {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={handleChange} value={inputValue} />
      <p>You Wrote: {inputValue}</p>
    </>
  );
}
