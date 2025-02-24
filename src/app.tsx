import Header from "./components/header/header";
import "./styles/base/_typography.scss";
import { useRef } from "react";
import { journey, projects, skills } from "./state/state";
import Button from "./components/button/button";
import Project from "./pages/project/project";
import "./pages/start/_start.scss";
import Journey from "./pages/journey/journey";
import Skills from "./pages/skills/skills";
export default function App() {
  const sectionScroll = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () => {
    sectionScroll.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header></Header>
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
      <Skills skill={skills}></Skills>
      <Journey journey={journey} />
    </>
  );
}
