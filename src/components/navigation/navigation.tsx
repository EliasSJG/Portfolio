import React from "react";
import "./_navigation.scss";
type NavigationProps = {
  navigationLinkClick: (section: string) => void;
};

export default function NavigationLinks({
  navigationLinkClick,
}: NavigationProps) {
  const handleLinkClick = (
    section: string,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event.preventDefault();
    navigationLinkClick(section);
  };

  return (
    <div className="navi-list">
      <a href="#" onClick={(e) => handleLinkClick("home", e)}>
        Hem
      </a>

      <a href="#" onClick={(e) => handleLinkClick("projects", e)}>
        Projekt
      </a>

      <a href="#" onClick={(e) => handleLinkClick("journey", e)}>
        Min Resa
      </a>

      <a href="#" onClick={(e) => handleLinkClick("about", e)}>
        Om Mig
      </a>

      <a href="#" onClick={(e) => handleLinkClick("skills", e)}>
        Skills
      </a>
    </div>
  );
}
