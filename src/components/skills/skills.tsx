import { useContext, useEffect, useRef, useState } from "react";
import "./_skills.scss";
import Button from "../button/button";
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
  const [isAnimating, setAnimate] = useState(false);

  const nextSkill = () => {
    setAnimate(true);
    setTimeout(() => {
      setCurrentSkill((prev) => (prev + 1) % skill.length);
      setAnimate(false);
    }, 1500);
  };
  const sectionRefs = useRef<HTMLDivElement>(null);

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

    if (sectionRefs.current) {
      observer.observe(sectionRefs.current);
    }
    return () => {
      if (sectionRefs.current) {
        observer.unobserve(sectionRefs.current);
      }

      observer.disconnect();
    };
  }, []);
  return (
    <div className="skills-main">
      <h1>{language === "swe" ? "Färdigheter" : "Skills"}</h1>
      <div ref={sectionRefs} className="skill-div hidden">
        <div
          className={`image-container ${
            isAnimating ? "animateOut" : "animateIn"
          }`}
        >
          <img
            src={skills[currentskill].image}
            alt={skills[currentskill].title}
            className="skill-image"
          />
        </div>
        <div
          className={` info-container ${
            isAnimating ? "animateOut" : "animateIn"
          }`}
        >
          <h2>{skills[currentskill].title}</h2>
          <p>{skills[currentskill].description[language]}</p>
        </div>
        <Button
          className="switch-skill"
          handleClick={nextSkill}
          title=">"
        ></Button>
      </div>{" "}
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="parallax">
          <use href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
          <use href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
          <use href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
          <use href="#gentle-wave" x="48" y="7" fill="#fff" />
        </g>
      </svg>
    </div>
  );
}
