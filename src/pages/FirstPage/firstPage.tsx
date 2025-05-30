import { useRef } from "react";
import AboutMe from "../about/about";
import Hero from "../../components/hero/hero";
import Journey from "../../components/journey/journey";
import Project from "../../components/project/project";
import Skills from "../../components/skills/skills";
import { journey, projects, skills } from "../../state/state";
import NavigationLinks from "../../components/navigation/navigation";

export default function FirstPage() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const projectRef = useRef<HTMLDivElement | null>(null);
  const journeyRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);

  return (
    <>
      <div ref={homeRef} id="home">
        <Hero />
      </div>

      <div ref={projectRef} id="project">
        <Project projects={projects} />
      </div>

      <div ref={journeyRef} id="journey">
        <Journey journey={journey} />
      </div>

      <div ref={aboutRef} id="about">
        <AboutMe />
      </div>

      <div ref={skillsRef} id="skills">
        <Skills skill={skills} />
      </div>

      <NavigationLinks
        refs={{ homeRef, projectRef, journeyRef, aboutRef, skillsRef }}
      />
    </>
  );
}
