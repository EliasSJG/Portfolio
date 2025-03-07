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
// import GitHubApi from "./api/githubApi/api";
import AboutMe from "./pages/about/about";
import Footer from "./components/footer/footer";

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
      {/* <GitHubApi></GitHubApi> */}
      <Skills skill={skills}></Skills>
      <Footer></Footer>
    </>
  );
}
