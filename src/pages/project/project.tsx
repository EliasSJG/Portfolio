import { useContext, useEffect, useRef } from "react";
import Button from "../../components/button/button";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";
import "./_project.scss";
type ProjectProps = {
  projects: {
    title: string;
    description: { swe: string; eng: string };
    link: string;
  }[];
};
function Project({ projects }: ProjectProps) {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry.target, entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });

    sectionRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      sectionRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });

      observer.disconnect();
    };
  }, []);

  const { language } = useContext(LanguageContext) as LanguageContextProps;
  const gitHub = "https://github.com/EliasSJG";
  return (
    <div className="project-section">
      <h1> {language === "swe" ? "Mina Projekt" : "My Projects"}</h1>
      <div className="project-grid ">
        {projects.map((project, index) => {
          return (
            <div
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="project-card hidden"
              key={index}
            >
              <h2>{project.title}</h2>

              <p>{project.description[language]}</p>
              <Button
                className="standard-button"
                handleClick={() => window.open(project.link, "_blank")}
                title={language === "swe" ? "Läs mer" : "Read more"}
              ></Button>
            </div>
          );
        })}
      </div>
      <Button
        className="standard-button"
        handleClick={() => window.open(gitHub, "_blank")}
        title={language === "swe" ? "Min Github" : "My Github"}
      ></Button>
    </div>
  );
}
export default Project;
