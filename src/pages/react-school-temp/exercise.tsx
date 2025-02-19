import AnimalList from "./react-exercise-temp/animalList";
import Counter from "./react-exercise-temp/countertemp";
import InputDemo from "./react-exercise-temp/inputDemo";
import NewCounter from "./react-exercise-temp/newCounter";
import PersonCard from "./react-exercise-temp/personcard";
import "./exercise.scss";
function ExercisePart() {
  return (
    <div className="school-exercise">
      <Counter></Counter>
      <NewCounter></NewCounter>
      <InputDemo></InputDemo>
      <PersonCard></PersonCard>
      <AnimalList></AnimalList>
    </div>
  );
}

export default ExercisePart;
