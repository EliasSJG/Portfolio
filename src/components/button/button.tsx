import "./_button.scss";

type ButtonProps = {
  title: string;
  handleClick: () => void;
};
export default function Button({ title, handleClick }: ButtonProps) {
  return (
    <button className="standard-button" onClick={handleClick}>
      {title}
    </button>
  );
}
