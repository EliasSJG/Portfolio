import { useContext, useEffect, useRef } from "react";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";
import "./_about.scss";
export default function AboutMe() {
  const { language } = useContext(LanguageContext) as LanguageContextProps;

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
    <>
      <h1>{language === "swe" ? "Om Mig" : "About Me"}</h1>
      <div ref={sectionRefs} className="about-section hidden">
        <div>
          <p>
            {language === "swe"
              ? " Jag började på LBS Gymnasiet 2021 och påbörjade min resa där. Jag gick många programmeringskurser men fastnade mest för webbutveckling. Det är därför jag nu har valt att studera frontend, så att jag kan bli den bästa programmeraren jag kan bli. Jag har deltagit i många skolprojekt genom LBS projektveckor, där man har en vecka på sig att skapa och slutföra ett projekt."
              : "I started at LBS Gymnasiet in 2021 and started my journey there. I took many programming courses but mostly stuck with web development. That's why I have now chosen to study frontend, so that I can become the best programmer I can be. I have participated in many school projects through LBS project weeks, where you have a week to create and complete a project."}
          </p>
        </div>
        <div className="dot-list-info">
          <ul>
            <li> {language === "swe" ? "Född: " : "Born:"} 05-07-26</li>
            <li>
              {language === "swe"
                ? "Språk: Svenska, Engelska"
                : "Language: Swedish, English"}
            </li>
            <li>{language === "swe" ? "Bor: " : "Resides: "} Sweden | Borås</li>
            <li>
              {language === "swe" ? "Utbildning: " : "Education: "}
              Yrkeshögskolan i Borås | Frontendutveckling | 2024 - 2026 LBS
              Gymnasiet | Systemutveckling | 2021 - 2024
            </li>
          </ul>
          <ul>
            <li>elias_gustafsson@outlook.com</li>
            <li>072-302-61-95</li>
            <li>
              <a href="https://github.com/EliasSJG">Github</a>
            </li>
            <li>
              <a href="www.linkedin.com/in/eliasgustafsson1">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
