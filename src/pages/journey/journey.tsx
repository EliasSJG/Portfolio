import { useContext } from "react";
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
  const { language } = useContext(LanguageContext) as LanguageContextProps;
  return (
    <div className="journey-section">
      <h1>{language === "swe" ? "Min Resa" : "My Journey"}</h1>
      <div className="journey-div">
        {journey.map((journey, index) => {
          return (
            <div key={index}>
              <h2>{journey.year}</h2>
              <p>{journey.description[language]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
