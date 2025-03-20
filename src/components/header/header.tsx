import { useEffect, useState } from "react";
import "./_header.scss";
import Button from "../button/button";
import NavigationLinks from "../navigation/navigation";
import { Link } from "react-router-dom";

type HeaderProps = {
  headerLinkClick: (section: string) => void;
  setLanguage: (lang: "swe" | "eng") => void;
  language: "swe" | "eng";
};

function Header({ headerLinkClick, setLanguage, language }: HeaderProps) {
  const [scrolled, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <h2>Elias Gustafsson</h2>
      <NavigationLinks navigationLinkClick={headerLinkClick} />
      <Button
        className={`language-button ${language === "swe" ? "active" : ""}`}
        handleClick={() => setLanguage(language === "swe" ? "eng" : "swe")}
        title={language === "swe" ? "Sve" : "Eng"}
      />
      <Link to="/contact">
        <Button
          className="standard-button"
          title={language === "swe" ? "Kontakt" : "Contact"}
          handleClick={() => {}}
        ></Button>
      </Link>
    </header>
  );
}

export default Header;
