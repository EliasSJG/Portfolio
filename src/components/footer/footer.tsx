import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";
import NavigationLinks from "../navigation/navigation";
import "./_footer.scss";

export default function Footer() {
  const { language } = useContext(LanguageContext) as LanguageContextProps;
  return (
    <footer>
      <div>
        <h2>Navigation</h2>
        <NavigationLinks />
      </div>
      <div>
        <h2>Elias Gustafsson</h2>
      </div>
      <div>
        <h2>{language === "swe" ? "Kontakt" : "Contact"}</h2>
        <p>elias_gustafsson@outlook.com</p>
        <p>072-302-61-95</p>

        <a href="https://github.com/EliasSJG">Github</a>

        <a href="www.linkedin.com/in/eliasgustafsson1">LinkedIn</a>
      </div>
    </footer>
  );
}
