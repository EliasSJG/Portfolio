import { createContext, ReactNode, useState } from "react";

type LanguageContextProps = {
  language: string;
  setLanguage: (lang: string) => void;
};
const languageContext = createContext<LanguageContextProps | null>(null);

type LanguageProps = {
  children: ReactNode;
};
const languageProvider = ({ children }: LanguageProps) => {
  const [language, setLanguage] = useState("swe");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      {children}
    </languageContext.Provider>
  );
};

export { languageContext, languageProvider };
