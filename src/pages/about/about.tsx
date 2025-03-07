import "./_about.scss";
export default function AboutMe() {
  return (
    <div className="about-main">
      <h1>Om Mig</h1>
      <div className="about-section">
        <div>
          <p>
            Jag började på LBS Gymnasiet 2021 och påbörjade min resa där. Jag
            gick många programmeringskurser men fastnade mest för
            webbutveckling. Det är därför jag nu har valt att studera frontend,
            så att jag kan bli den bästa programmeraren jag kan bli. Jag har
            deltagit i många skolprojekt genom LBS "projektveckor", där man har
            en vecka på sig att skapa och slutföra ett projekt.
          </p>
        </div>
        <div className="dot-list-info">
          <ul>
            <li>Född: 05-07-26</li>
            <li>Språk: Svenska, Engelska</li>
            <li>Bor: Borås</li>
            <li>
              Utbildning: Yrkeshögskolan i Borås | Frontendutveckling | 2024 -
              2026
              <li>LBS Gymnasiet | Systemutveckling | 2021 - 2024</li>
            </li>
          </ul>
          <ul>
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
      </div>
    </div>
  );
}
