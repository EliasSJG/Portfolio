import { useContext, useEffect, useRef } from "react";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";
import "./_journey.scss";

type JourneyProps = {
  journey: {
    year: string;
    description: { swe: string; eng: string };
  }[];
};

export default function Journey({ journey }: JourneyProps) {
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
  return (
    <div className="journey-section ">
      <h1>{language === "swe" ? "Min Resa" : "My Journey"}</h1>
      <div className="journey-div">
        {journey.map((journey, index) => {
          return (
            <div
              ref={(el) => {
                sectionRefs.current[index] = el;
              }}
              className="journey-cards hidden"
              key={index}
            >
              <h2>{journey.year}</h2>
              <p>{journey.description[language]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
