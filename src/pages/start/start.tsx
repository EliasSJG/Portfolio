import Button from "../../components/button/button";
import Counter from "../../components/button/countertemp";
import NewCounter from "../../components/button/newCounter";
import "./_start.scss";
function Start() {
  return (
    <>
      <div className="start-left">
        <div>
          <h1>Elias Gustafsson</h1>
          <h2>Portfolio</h2>
          <p>
            Just nu en övning för att lära om react, men kommer stadigt
            utvecklas till en riktig Portfolio som kan vara bra att ha
          </p>
          {/* <Button title="Click Me !" hasIcon={true}></Button>
          <Button title="Click Me !" hasIcon={false}></Button> */}
          <Button></Button>
          <Counter></Counter>

          <NewCounter></NewCounter>
        </div>
        <div className="start-right">
          <p>here image gonna be</p>
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default Start;
