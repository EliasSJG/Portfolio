import React, { useState } from "react";

type Person = {
  name: string;
  age: number;
};

export default function PersonCard() {
  const [person, setPerson] = useState<Person>({ name: "", age: 0 });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, name: e.target.value });
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPerson({ ...person, age: Number(e.target.value) });
  };

  return (
    <>
      <h2>PersonCard</h2>
      <ul>
        <li>Name:{person.name}</li>
        <li>Age:{person.age}</li>
      </ul>

      <label htmlFor="personName">Name:{}</label>
      <input
        type="text"
        id="personName"
        value={person.name}
        placeholder="Write Your name"
        onChange={handleNameChange}
      />
      <input
        type="text"
        id="personName"
        value={person.age}
        placeholder="Write Your age"
        onChange={handleAgeChange}
      />
    </>
  );
}
