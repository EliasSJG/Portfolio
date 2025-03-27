import "./styles/base/_typography.scss";
import React, { useContext, useEffect, useRef } from "react";
import { journey, projects, skills } from "./state/state";
import Button from "./components/button/button";
import Project from "./pages/project/project";
import "./pages/start/_start.scss";
import Journey from "./pages/journey/journey";
import Skills from "./pages/skills/skills";
import portfoliopicture from "./images/portfoliopicture.png";
import AboutMe from "./pages/about/about";

import { LanguageContext } from "./context/languageConext";

// type SectionName = "home";

export default function App() {
  // const sectionRefs: Record<
  //   SectionName,
  //   React.RefObject<HTMLDivElement | null>
  // > = {
  //   home: useRef<HTMLDivElement | null>(null),
  // };

  // useEffect(() => {
  //   const observer = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       console.log(entry.target, entry.isIntersecting);
  //       if (entry.isIntersecting) {
  //         entry.target.classList.add("show");
  //       } else {
  //         entry.target.classList.remove("show");
  //       }
  //     });
  //   });

  //   Object.values(sectionRefs).forEach((sectionRefs) => {
  //     if (sectionRefs.current) {
  //       observer.observe(sectionRefs.current);
  //     }
  //   });

  //   return () => {
  //     Object.values(sectionRefs).forEach((sectionRefs) => {
  //       if (sectionRefs.current) {
  //         observer.unobserve(sectionRefs.current);
  //       }
  //     });
  //     observer.disconnect();
  //   };
  // }, []);

  // hiddenElements.forEach((element) => observer.unobserve(element));

  // const scrollToSections = (section: SectionName) => {
  //   const sectionRef = sectionRefs[section];
  //   sectionRef?.current?.scrollIntoView({ behavior: "smooth" });
  // };

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language } = context;
  return (
    <>
      <div>
        <div className="home">
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
              handleClick={() => null}
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
        </div>{" "}
      </div>

      <div>
        <Project projects={projects} />
      </div>
      <div>
        <Journey journey={journey} />
      </div>
      <div className="about">
        <AboutMe />
      </div>
      <div>
        <Skills skill={skills} />
      </div>
    </>
  );
}
