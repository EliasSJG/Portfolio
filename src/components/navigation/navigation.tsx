import { useContext } from "react";

import "./_navigation.scss";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";

export default function NavigationLinks() {
  const { language } = useContext(LanguageContext) as LanguageContextProps;

  return (
    <div className="navi-list">
      <a href="#">{language === "swe" ? "Hem" : "Home"}</a>

      <a href="#">{language === "swe" ? "Projekt" : "Project"}</a>

      <a href="#">{language === "swe" ? "Min Resa" : "My Journey"}</a>

      <a href="#">{language === "swe" ? "Om Mig" : "About Me"}</a>

      <a href="#">{language === "swe" ? "Färdigheter" : "Skills"}</a>
    </div>
  );
}
