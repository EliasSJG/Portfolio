import "./_button.scss";

type ButtonProps = {
  title: string;
  handleClick: () => void;
  className: string;
};
export default function Button({
  title,
  handleClick,
  className = "",
}: ButtonProps) {
  return (
    <button className={className} onClick={handleClick}>
      {title}
    </button>
  );
}
