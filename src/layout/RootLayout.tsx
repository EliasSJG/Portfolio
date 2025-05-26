import { useContext } from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import { LanguageContext } from "../context/languageConext";
import { Outlet } from "react-router-dom";

import "../styles/base/_typography.scss";

export default function RootLayout() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("LanguageContext must be used within a LanguageProvider");
  }
  const { language, setLanguage } = context;

  return (
    <>
      <Header setLanguage={setLanguage} language={language} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}
