import "../../styles/base/_typography.scss";
import { useContext } from "react";
import "./hero.scss";

import portfoliopicture from "../../images/portfoliopicture.png";
import { LanguageContext } from "../../context/languageConext";
import Button from "../button/button";
import StarBackground from "../background/background";

export default function Hero() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }

  const { language } = context;
  return (
    <>
      <StarBackground />
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
              ? "En 19-årig frontendutvecklare som tycker om att programmera och designa webbapplikationer."
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
    </>
  );
}
