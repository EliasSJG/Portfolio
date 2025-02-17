import "./_button.scss";

type ButtonProps = {
  onClick: () => void;
  visible: boolean;
};
const Button: React.FC<ButtonProps> = ({ onClick, visible }) => {
  return <button onClick={onClick}>{visible ? "Hide All" : "Show All"}</button>;
};

export default Button;
