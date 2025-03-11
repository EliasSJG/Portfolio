import { useEffect, useState } from "react";
import "./_header.scss";
import Button from "../button/button";
import NavigationLinks from "../navigation/navigation";

type HeaderProps = {
  headerLinkClick: (section: string) => void;
};
function Header({ headerLinkClick }: HeaderProps) {
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

      <NavigationLinks navigationLinkClick={headerLinkClick}></NavigationLinks>
      <Button
        className="standard-button"
        title="Kontakt"
        handleClick={() => {}}
      ></Button>
    </header>
  );
}
export default Header;
