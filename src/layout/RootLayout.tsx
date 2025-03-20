import { useContext, useRef } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { LanguageContext } from "../context/languageConext";
import { Outlet } from "react-router-dom";

import "../styles/base/_typography.scss";
import "../pages/start/_start.scss";

export default function RootLayout() {
  const homeSectionScroll = useRef<HTMLDivElement | null>(null);
  const projectSectionScroll = useRef<HTMLDivElement | null>(null);
  const journeySectionScroll = useRef<HTMLDivElement | null>(null);
  const aboutSectionScroll = useRef<HTMLDivElement | null>(null);
  const skillsSectionScroll = useRef<HTMLDivElement | null>(null);

  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }
  const { language, setLanguage } = context;

  const scrollToSections = (section: string) => {
    switch (section) {
      case "home":
        homeSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "journey":
        journeySectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "about":
        aboutSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsSectionScroll.current?.scrollIntoView({ behavior: "smooth" });
        break;
    }
  };

  return (
    <>
      <Header
        headerLinkClick={scrollToSections}
        setLanguage={setLanguage}
        language={language}
      />

      <main>
        <Outlet />
      </main>

      <Footer footerLinkClick={scrollToSections} />
    </>
  );
}
