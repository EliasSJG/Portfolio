import NavigationLinks from "../navigation/navigation";
import "./_footer.scss";

type footerProps = {
  footerLinkClick: (section: string) => void;
};
export default function Footer({ footerLinkClick }: footerProps) {
  return (
    <footer>
      <div>
        <h3>Elias Gustafsson</h3>
      </div>
      <div>
        <ul>
          <h3>Navigation</h3>
          <li>
            <NavigationLinks
              navigationLinkClick={footerLinkClick}
            ></NavigationLinks>
          </li>
        </ul>

        <ul>
          <h3>Kontakt</h3>
          <li>elias_gustafsson@outlook.com</li>
          <li>072-302-61-95</li>
          <li>
            <a href="https://github.com/EliasSJG">Github</a>
          </li>
          <li>
            <a href="www.linkedin.com/in/eliasgustafsson1">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
