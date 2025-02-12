import Header from "./components/header/header";
import Start from "./pages/start/start";
import Project from "./pages/project/project";
const nameTitles = ["Ultimate Trivia", "Zoodjur", "Monster Creation"];

function App() {
  return (
    <>
      <Header title="Elias Gustafsson"></Header>
      <Start></Start>
      <Project title={nameTitles}></Project>
    </>
  );
}
export default App;
