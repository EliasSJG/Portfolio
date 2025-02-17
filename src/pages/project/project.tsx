import "./_project.scss";
type ProjectProps = {
  title: string[];
};

function Project({ title }: ProjectProps) {
  return (
    <div className="project-grid">
      {title.map((item) => {
        return (
          <div>
            <h3>{item}</h3>
            <p>text</p>
          </div>
        );
      })}
    </div>
  );
}
export default Project;
