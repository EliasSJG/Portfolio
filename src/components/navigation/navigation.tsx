import { useContext } from "react";
import "./_navigation.scss";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";
type NavigationProps = {
  refs?: {
    homeRef: React.RefObject<HTMLDivElement | null>;
    projectRef: React.RefObject<HTMLDivElement | null>;
    journeyRef: React.RefObject<HTMLDivElement | null>;
    aboutRef: React.RefObject<HTMLDivElement | null>;
    skillsRef: React.RefObject<HTMLDivElement | null>;
  };
  onLinkClick?: () => void;
};

export default function NavigationLinks({
  refs,
  onLinkClick,
}: NavigationProps) {
  const { language } = useContext(LanguageContext) as LanguageContextProps;

  const scrollToRef = (
    event: React.MouseEvent<HTMLAnchorElement>,
    refName: keyof NonNullable<typeof refs>
  ) => {
    event.preventDefault();
    if (refs && refs[refName]?.current) {
      refs[refName].current.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById(refName.replace("Ref", ""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    if (onLinkClick) onLinkClick();
  };

  return (
    <nav className="navi-list">
      <a href="#home" onClick={(e) => scrollToRef(e, "homeRef")}>
        {language === "swe" ? "Hem" : "Home"}
      </a>
      <a href="#project" onClick={(e) => scrollToRef(e, "projectRef")}>
        {language === "swe" ? "Projekt" : "Project"}
      </a>
      <a href="#journey" onClick={(e) => scrollToRef(e, "journeyRef")}>
        {language === "swe" ? "Min Resa" : "My Journey"}
      </a>
      <a href="#about" onClick={(e) => scrollToRef(e, "aboutRef")}>
        {language === "swe" ? "Om Mig" : "About Me"}
      </a>
      <a href="#skills" onClick={(e) => scrollToRef(e, "skillsRef")}>
        {language === "swe" ? "Färdigheter" : "Skills"}
      </a>
    </nav>
  );
}
