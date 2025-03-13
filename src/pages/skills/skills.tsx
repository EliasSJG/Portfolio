import { useContext, useState } from "react";
import "./_skills.scss";
import Button from "../../components/button/button";
import { skills } from "../../state/state";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";
type SkillsProps = {
  skill: {
    title: string;
    description: { swe: string; eng: string };
    image: string;
  }[];
};

export default function Skills({ skill }: SkillsProps) {
  const [currentskill, setCurrentSkill] = useState(0);
  const { language } = useContext(LanguageContext) as LanguageContextProps;
  const nextSkill = () => {
    setCurrentSkill((prev) => (prev + 1) % skill.length);
  };

  return (
    <div className="skills-main">
      <h1>{language === "swe" ? "Färdigheter" : "Skills"}</h1>
      <div className="skill-div">
        <div className="image-container">
          <img
            src={skills[currentskill].image}
            alt={skills[currentskill].title}
            className="skill-image"
          />
        </div>
        <div className="info-container">
          <h2>{skills[currentskill].title}</h2>
          <p>{skills[currentskill].description[language]}</p>
        </div>
        <Button
          className="switch-skill"
          handleClick={nextSkill}
          title=">"
        ></Button>
      </div>
    </div>
  );
}
