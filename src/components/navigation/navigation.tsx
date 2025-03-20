import React, { useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./_navigation.scss";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";

type NavigationProps = {
  navigationLinkClick: (section: string) => void;
};

export default function NavigationLinks({
  navigationLinkClick,
}: NavigationProps) {
  const navigate = useNavigate();
  const handleLinkClick = (
    section: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    navigationLinkClick(section);

    if (section === "home") {
      navigate("/");
    } else if (section === "projects") {
      navigate("/");
    } else if (section === "journey") {
      navigate("/");
    } else if (section === "about") {
      navigate("/");
    } else if (section === "skills") {
      navigate("/");
    }
  };

  const { language } = useContext(LanguageContext) as LanguageContextProps;

  return (
    <div className="navi-list">
      <a href="#" onClick={(e) => handleLinkClick("home", e)}>
        {language === "swe" ? "Hem" : "Home"}
      </a>

      <a href="#" onClick={(e) => handleLinkClick("projects", e)}>
        {language === "swe" ? "Projekt" : "Project"}
      </a>

      <a href="#" onClick={(e) => handleLinkClick("journey", e)}>
        {language === "swe" ? "Min Resa" : "My Journey"}
      </a>

      <a href="#" onClick={(e) => handleLinkClick("about", e)}>
        {language === "swe" ? "Om Mig" : "About Me"}
      </a>

      <a href="#" onClick={(e) => handleLinkClick("skills", e)}>
        {language === "swe" ? "Färdigheter" : "Skills"}
      </a>
    </div>
  );
}
