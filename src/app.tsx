import Header from "./components/header/header";
import Start from "./pages/start/start";
import Project from "./pages/project/project";

import { useState } from "react";
import Button from "./components/button/button";
import ExercisePart from "./pages/react-school-temp/exercise";

const nameTitles = ["Ultimate Trivia", "Zoodjur", "Monster Creation"];

function App() {
  const [appDisplay, setStartDisplay] = useState(true);
  const setStartVisibilityToggle = () => {
    setStartDisplay((prev) => !prev);
  };
  return (
    <>
      {" "}
      <Header></Header> <Start></Start>
      <Project title={nameTitles}></Project>
      <Button onClick={setStartVisibilityToggle} visible={appDisplay}></Button>
      {appDisplay && <ExercisePart></ExercisePart>}
    </>
  );
}
export default App;
