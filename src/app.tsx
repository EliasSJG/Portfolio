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
  const homeSectionScroll = useRef<HTMLDivElement | null>(null);
  const projectSectionScroll = useRef<HTMLDivElement | null>(null);
  const journeySectionScroll = useRef<HTMLDivElement | null>(null);
  const aboutSectionScroll = useRef<HTMLDivElement | null>(null);
  const skillsSectionScroll = useRef<HTMLDivElement | null>(null);
  const scrollToSections = (section: string) => {
    switch (section) {
      case "home":
        homeSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "journey":
        journeySectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <>
      <Header headerLinkClick={scrollToSections}></Header>
      <section ref={homeSectionScroll}>
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
            handleClick={() => scrollToSections("projects")}
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
      <div ref={projectSectionScroll}>
        <Project projects={projects} />
      </div>

      <div ref={journeySectionScroll}>
        <Journey journey={journey} />
      </div>

      <div ref={aboutSectionScroll}>
        <AboutMe></AboutMe>
      </div>
      {/* <GitHubApi></GitHubApi> */}
      <div ref={skillsSectionScroll}>
        <Skills skill={skills}></Skills>
      </div>
      <Footer footerLinkClick={scrollToSections}></Footer>
    </>
  );
}
