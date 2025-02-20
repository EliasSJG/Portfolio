import "./_start.scss";
import "../../styles/base/_typography.scss";
import Button from "../../components/button/button";
import { useRef } from "react";
import Project from "../project/project";
function Start() {
  const sectionScroll = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () => {
    sectionScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Ultimate Trivia",
      description:
        "Detta är ett slutprojekt app jag skapade för den tredje kursen i skolan. Det är ett frågesportsspel som är en blandning mellan smartare än en femteklassare och postkodsmiljonären",
      link: "https://github.com/EliasSJG/UltimateTrivia",
    },
    {
      title: "Zoodjur",
      description: "tomt just nu",
      link: "",
    },

    {
      title: "Monster Creation",
      description: "tomt just nu",
      link: "",
    },
  ];
  return (
    <>
      <div className="start">
        <div>
          <h1>Elias Gustafsson</h1>
          <h2>Portfolio</h2>
          <p>
            Just nu en övning för att lära om react, men kommer stadigt
            utvecklas till en riktig Portfolio som kan vara bra att ha
          </p>
          <Button
            handleClick={scrollToProjects}
            title="Lär mer om mig!"
          ></Button>
        </div>
      </div>

      <div ref={sectionScroll}>
        <Project projects={projects} />
      </div>
    </>
  );
}

export default Start;
