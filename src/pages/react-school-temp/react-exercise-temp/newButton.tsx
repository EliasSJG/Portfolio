type NewButtonProps = {
  title: string;
  clickFunction: () => void;
};
const NewButton = ({ title, clickFunction }: NewButtonProps) => {
  const handleClick = () => {
    clickFunction();
  };
  return <button onClick={handleClick}>{title}</button>;
};

export default NewButton;
