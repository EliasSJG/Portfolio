import Button from "../../components/button/button";
import "./_start.scss";
function Start() {
  return (
    <div className="start-left">
      <div>
        <h1>Elias Gustafsson</h1>
        <h2>Portfolio</h2>
        <p>
          Just nu en övning för att lära om react, men kommer stadigt utvecklas
          till en riktig Portfolio som kan vara bra att ha
        </p>
        <Button></Button>
      </div>
      <div className="start-right">
        <p>here image gonna be</p>
        <img src="" alt="" />
      </div>
    </div>
  );
}

export default Start;
