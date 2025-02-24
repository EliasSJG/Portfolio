import "./_skills.scss";
type SkillsProps = {
  skill: {
    title: string;
    description: string;
    image: string;
  }[];
};

export default function Skills({ skill }: SkillsProps) {
  return (
    <>
      <h1>Skills</h1>
      <div className="skill-div">
        {skill.map((skill, index) => {
          return (
            <div key={index}>
              <div>{skill.image}</div>
              <div>
                <h2>{skill.title}</h2>
                <p>{skill.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
