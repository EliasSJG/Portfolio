import Header from "./components/header/header";
import "./styles/base/_typography.scss";
import { useCallback, useMemo, useRef, useState } from "react";
import { journey, projects, skills } from "./state/state";
import Button from "./components/button/button";
import Project from "./pages/project/project";
import "./pages/start/_start.scss";
import Journey from "./pages/journey/journey";
import Skills from "./pages/skills/skills";
import portfoliopicture from "./images/portfoliopicture.png";
import GitHubApi from "./api/githubApi/api";
import AboutMe from "./pages/about/about";

export default function App() {
  const sectionScroll = useRef<HTMLDivElement | null>(null);
  const scrollToProjects = () => {
    sectionScroll.current?.scrollIntoView({ behavior: "smooth" });
  };

  let ref = useRef(0);

  function useRefFunction() {
    ref.current = ref.current + 1;
    alert(`You clicked ` + ref.current + ` times`);
  }

  type Monster = {
    id: number;
    name: string;
    tentacles: number;
  };
  const [monsters, setMonsters] = useState<Monster[]>([
    { id: 1, name: "Bosse", tentacles: 12 },
    { id: 2, name: "Kalle", tentacles: 510 },
    { id: 3, name: "Stefan", tentacles: 5 },
    { id: 4, name: "Jonas", tentacles: 3 },
  ]);

  const totaltentacles = useMemo(() => {
    console.log("Beräknar yeahs...");
    const total = monsters.reduce((sum, monster) => +monster.tentacles, 0);
    return total;
  }, [monsters]);

  const [count, setCount] = useState(0);
  const useCallbackFunction = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <>
      <Header></Header>
      <section>
        <div>
          <h1></h1>
          <h1>Hej! Jag heter Elias!</h1>
          <h2>Välkommen till min portfolio!</h2>
          <p>
            En 19-årig frontendutvecklare som tycker om att programmera och
            designa webbapplikationer.
          </p>
          <Button
            className="standard-button"
            handleClick={scrollToProjects}
            title="Lär mer"
          ></Button>
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
      <AboutMe></AboutMe>
      <GitHubApi></GitHubApi>
      <Skills skill={skills}></Skills>
      <div>
        <h1>UseRef</h1>
        <Button
          title="click me"
          handleClick={useRefFunction}
          className="standard-button"
        ></Button>

        <h1>UseMemo</h1>
        <p>Vi har {totaltentacles} tentaklar</p>
        {monsters.map((monster) => (
          <p key={monster.id}>
            name: {monster.name} har {monster.tentacles} tentaklar
          </p>
        ))}

        <h1>UseCallback</h1>
        <p>Count: {count}</p>
        <Button
          title="click me"
          className="standard-button"
          handleClick={useCallbackFunction}
        ></Button>
      </div>
    </>
  );
}
