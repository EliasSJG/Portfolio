import React, { useState } from "react";

export default function AnimalList() {
  const [animals, setAnimals] = useState<string[]>(["gorilla", "giraff"]);
  const [inputAnimal, setInput] = useState("");

  const deleteAnimal = (animal: string) => {
    setAnimals(animals.filter((a) => a !== animal));
  };
  const editAnimal = (animal: string) => {
    setAnimals(animals.map((a) => (a === animal ? inputAnimal : a)));
  };
  const handleClick = () => {
    setAnimals([...animals, inputAnimal]);
  };

  return (
    <>
      <h1>AnimalList</h1>
      <input
        type="text"
        value={inputAnimal}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={handleClick}>Add Animal</button>
      <ul>
        {animals.map((animal) => (
          <li key={animal}>
            {animal}{" "}
            <button
              onClick={() => {
                deleteAnimal(animal);
              }}
            >
              Delete
            </button>
            <button onClick={() => editAnimal(animal)}>ChangeMe</button>
          </li>
        ))}
      </ul>
    </>
  );
}
