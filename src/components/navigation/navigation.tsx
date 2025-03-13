import React, { useContext } from "react";
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
  const handleLinkClick = (
    section: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    navigationLinkClick(section);
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
