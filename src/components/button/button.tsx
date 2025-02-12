import "./_button.scss";

type ButtonProps = {
  title: string;
  hasIcon: Boolean;
};
//Conditional rendering
function button({ title, hasIcon }: ButtonProps) {
  //const [buttonText, setButtonText] = useState("Show More");

  return (
    <button>
      {hasIcon && "thing"}
      {title}
    </button>
  );
  //  const buttonClick = () => {
  //  if (buttonText === "Show More") {
  //    setButtonText("Show Less");
  //  } else {
  //    setButtonText("Show More");
  // }

  // change button text
}

//  return <button onClick={buttonClick}>{buttonText}</button>;

export default button;
