import AboutMe from "../about/about";
import Hero from "../../components/hero/hero";
import Journey from "../../components/journey/journey";
import Project from "../../components/project/project";
import Skills from "../../components/skills/skills";
import { journey, projects, skills } from "../../state/state";

export default function FirstPage() {
  return (
    <>
      <Hero></Hero>
      <Project projects={projects} />
      <Journey journey={journey} />
      <div className="about-div">
        <AboutMe />
      </div>

      <Skills skill={skills} />
    </>
  );
}
