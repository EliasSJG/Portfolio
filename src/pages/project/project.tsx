import { useContext } from "react";
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
  const { language } = useContext(LanguageContext) as LanguageContextProps;
  const gitHub = "https://github.com/EliasSJG";
  return (
    <div className="project-section">
      <h1> {language === "swe" ? "Mina Projekt" : "My Projects"}</h1>
      <div className="project-grid">
        {projects.map((project, index) => {
          return (
            <div key={index}>
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
