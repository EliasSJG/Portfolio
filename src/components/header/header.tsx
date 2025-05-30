import { useEffect, useState } from "react";
import "./_header.scss";
import Button from "../button/button";
import NavigationLinks from "../navigation/navigation";
import { Link } from "react-router-dom";

type HeaderProps = {
  setLanguage: (lang: "swe" | "eng") => void;
  language: "swe" | "eng";
};

export default function Header({ setLanguage, language }: HeaderProps) {
  const [scrolled, setScroll] = useState(false);
  const [isMobile, setMobile] = useState(window.innerWidth <= 1056);
  const [isName, setName] = useState(window.innerWidth <= 288);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setMobile(width <= 1056);
      setName(width <= 288);
    };

    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <h2>{isName ? "Elias" : "Elias Gustafsson"}</h2>
        {isMobile ? (
          <button className="menu-toggle" onClick={() => setMenu(true)}>
            ☰
          </button>
        ) : (
          <>
            <NavigationLinks />
            <Button
              className={`language-button ${
                language === "swe" ? "active" : ""
              }`}
              handleClick={() =>
                setLanguage(language === "swe" ? "eng" : "swe")
              }
              title={language === "swe" ? "Sve" : "Eng"}
            />
            <Link to="/contact">
              <Button
                className="standard-button"
                title={language === "swe" ? "Kontakt" : "Contact"}
                handleClick={() => {}}
              />
            </Link>
          </>
        )}
      </header>

      {menu && isMobile && (
        <div className="fullscreen-menu">
          <button className="close-button" onClick={() => setMenu(false)}>
            ×
          </button>
          <NavigationLinks onLinkClick={() => setMenu(false)} />
          <Button
            className={`language-button ${language === "swe" ? "active" : ""}`}
            handleClick={() => {
              setLanguage(language === "swe" ? "eng" : "swe");
              setMenu(false);
            }}
            title={language === "swe" ? "Sve" : "Eng"}
          />
          <Link to="/contact">
            <Button
              className="standard-button"
              title={language === "swe" ? "Kontakt" : "Contact"}
              handleClick={() => setMenu(false)}
            />
          </Link>
        </div>
      )}
    </>
  );
}
