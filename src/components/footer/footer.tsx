import { useContext } from "react";
import {
  LanguageContext,
  LanguageContextProps,
} from "../../context/languageConext";
import NavigationLinks from "../navigation/navigation";
import "./_footer.scss";

type footerProps = {
  footerLinkClick: (section: string) => void;
};
export default function Footer({ footerLinkClick }: footerProps) {
  const { language } = useContext(LanguageContext) as LanguageContextProps;
  return (
    <footer>
      <div>
        <h2>Navigation</h2>
        <NavigationLinks
          navigationLinkClick={footerLinkClick}
        ></NavigationLinks>
      </div>
      <div>
        <h2>Elias Gustafsson</h2>
        <p></p>
      </div>
      <div>
        <h2>{language === "swe" ? "Kontakt" : "Contact"}</h2>
        <p>elias_gustafsson@outlook.com</p>
        <p>072-302-61-95</p>
        <p>
          <a href="https://github.com/EliasSJG">Github</a>
        </p>
        <p>
          <a href="www.linkedin.com/in/eliasgustafsson1">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}
