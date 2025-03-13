import "./_button.scss";

type ButtonProps = {
  title: string;
  handleClick: () => void;
  className: string;
  children?: React.ReactNode;
};
export default function Button({
  title,
  handleClick,
  className = "",
  children,
}: ButtonProps) {
  return (
    <button className={className} onClick={handleClick}>
      {title || children}
    </button>
  );
}
