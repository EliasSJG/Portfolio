import Button from "../../components/button/button";
import "./_project.scss";
type ProjectProps = {
  projects: { title: string; description: string; link: string }[];
};

function Project({ projects }: ProjectProps) {
  const gitHub = "https://github.com/EliasSJG";
  return (
    <div className="project-section">
      <h1>Mina Projekt</h1>
      <div className="project-grid">
        {projects.map((project, index) => {
          return (
            <div key={index}>
              <h2>{project.title}</h2>

              <p>{project.description}</p>
              <Button
                handleClick={() => window.open(project.link, "_blank")}
                title="Läs mer"
              ></Button>
            </div>
          );
        })}
      </div>
      <Button
        handleClick={() => window.open(gitHub, "_blank")}
        title="Min Github"
      ></Button>
    </div>
  );
}
export default Project;
