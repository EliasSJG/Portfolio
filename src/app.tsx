import Header from "./components/header/header";
import Start from "./pages/start/start";
import Project from "./pages/project/project";

import { useState } from "react";
import Button from "./components/button/button";
import PersonCard from "./components/personCard/personcard";
import InputDemo from "./components/inputDemo/inputDemo";
import AnimalList from "./components/amimalList/animalList";

const nameTitles = ["Ultimate Trivia", "Zoodjur", "Monster Creation"];

function App() {
  const [appDisplay, setStartDisplay] = useState(true);
  const setStartVisibilityToggle = () => {
    setStartDisplay((prev) => !prev);
  };
  return (
    <>
      {" "}
      <Header title="Elias Gustafsson"></Header>{" "}
      <Button onClick={setStartVisibilityToggle} visible={appDisplay}></Button>
      {appDisplay && (
        <>
          <Start></Start>
          <Project title={nameTitles}></Project>
          <InputDemo></InputDemo>
          <PersonCard></PersonCard>
          <AnimalList></AnimalList>
        </>
      )}
    </>
  );
}
export default App;
