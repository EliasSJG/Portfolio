import { useEffect, useState } from "react";
import "./_header.scss";

function Header() {
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

      <div>
        <a href="">Hem</a>
        <a href="">Projekt</a>
        <a href="">Skills</a>
        <a href="">Om Mig</a>
        <a href="">Min Resa</a>
      </div>
    </header>
  );
}
export default Header;
