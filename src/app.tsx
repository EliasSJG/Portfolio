import Header from "./components/header/header";
import "./styles/base/_typography.scss";
import { useContext, useRef } from "react";
import { journey, projects, skills } from "./state/state";
import Button from "./components/button/button";
import Project from "./pages/project/project";
import "./pages/start/_start.scss";
import Journey from "./pages/journey/journey";
import Skills from "./pages/skills/skills";
import portfoliopicture from "./images/portfoliopicture.png";
import AboutMe from "./pages/about/about";
import Footer from "./components/footer/footer";
import { LanguageContext } from "./context/languageConext";

export default function App() {
  const homeSectionScroll = useRef<HTMLDivElement | null>(null);
  const projectSectionScroll = useRef<HTMLDivElement | null>(null);
  const journeySectionScroll = useRef<HTMLDivElement | null>(null);
  const aboutSectionScroll = useRef<HTMLDivElement | null>(null);
  const skillsSectionScroll = useRef<HTMLDivElement | null>(null);

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language, setLanguage } = context;

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
      <Header
        headerLinkClick={scrollToSections}
        setLanguage={setLanguage}
        language={language}
      />
      <section ref={homeSectionScroll}>
        <div>
          <h1>
            {language === "swe"
              ? "Hej! Jag Heter Elias!"
              : "Hi! My Name Is Elias"}
          </h1>
          <h2>
            {language === "swe"
              ? "Välkommen till min portfolio!"
              : "Welcome to my portfolio"}
          </h2>
          <p>
            {language === "swe"
              ? "En 19-årig frontendutvecklare som tycker om att programmera ochdesigna webbapplikationer."
              : "A 19-year-old front-end developer who enjoys programming and designing web applications."}
          </p>
          <Button
            className="standard-button"
            handleClick={() => scrollToSections("projects")}
            title={language === "swe" ? "Läs mer" : "Read more"}
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
      <div ref={skillsSectionScroll}>
        <Skills skill={skills}></Skills>
      </div>
      <Footer footerLinkClick={scrollToSections}></Footer>
    </>
  );
}
