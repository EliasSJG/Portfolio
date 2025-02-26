import Header from "./components/header/header";
import "./styles/base/_typography.scss";
import { useRef } from "react";
import { journey, projects, skills } from "./state/state";
import Button from "./components/button/button";
import Project from "./pages/project/project";
import "./pages/start/_start.scss";
import Journey from "./pages/journey/journey";
import Skills from "./pages/skills/skills";
import portfoliopicture from "./images/portfoliopicture.png";
export default function App() {
  const sectionScroll = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () => {
    sectionScroll.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header></Header>
      <section>
        <div>
          <h1></h1>
          <h1>Hej! Jag heter Elias!</h1>
          <h2>Välkommen till min portfolio!</h2>
          <p>
            Just nu en övning för att lära om react, men kommer stadigt
            utvecklas till en riktig Portfolio som kan vara bra att ha
          </p>
          <Button handleClick={scrollToProjects} title="Lär mer"></Button>
        </div>
        <div>
          <img
            className="portfolio-picture"
            src={portfoliopicture}
            alt="Picture of me"
          />
        </div>
      </section>
      <div ref={sectionScroll}>
        <Project projects={projects} />
      </div>{" "}
      <Journey journey={journey} />
      <Skills skill={skills}></Skills>
    </>
  );
}
