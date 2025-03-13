import { createContext, ReactNode, useState } from "react";

export type LanguageContextProps = {
  language: "swe" | "eng";
  setLanguage: React.Dispatch<React.SetStateAction<"swe" | "eng">>;
};
const LanguageContext = createContext<LanguageContextProps | null>(null);

type LanguageProps = {
  children: ReactNode;
};
export const LanguageProvider = ({ children }: LanguageProps) => {
  const [language, setLanguage] = useState<"swe" | "eng">("swe");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext };
