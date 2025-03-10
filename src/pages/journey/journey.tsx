import "./_journey.scss";

type JourneyProps = {
  journey: {
    year: string;
    description: string;
  }[];
};

export default function Journey({ journey }: JourneyProps) {
  return (
    <div className="journey-section">
      <h1>Min Resa</h1>
      <div className="journey-div">
        {journey.map((journey, index) => {
          return (
            <div key={index}>
              <h2>{journey.year}</h2>
              <p>{journey.description}</p>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
}
