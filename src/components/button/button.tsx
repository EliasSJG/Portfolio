import "./_button.scss";

const Button = () => {
  const handleClick = () => {
    console.log("hello");
  };

  return <button onClick={handleClick}>Click me </button>;
};

export default Button;
// type ButtonProps = {
//   title: string;
//   hasIcon: Boolean;
// };
//Conditional rendering
// function button({ title, hasIcon }: ButtonProps) {
//   //const [buttonText, setButtonText] = useState("Show More");

//   return (
//     <button>
//       {hasIcon && "thing"}
//       {title}
//     </button>
//   );

//  const buttonClick = () => {
//  if (buttonText === "Show More") {
//    setButtonText("Show Less");
//  } else {
//    setButtonText("Show More");
// }

// change button text
// }

//  return <button onClick={buttonClick}>{buttonText}</button>;
