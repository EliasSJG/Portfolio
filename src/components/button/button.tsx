import { useState } from "react";
import "./_button.scss";
function button() {
  const [buttonText, setButtonText] = useState("Show More");
  const buttonClick = () => {
    if (buttonText === "Show More") {
      setButtonText("Show Less");
    } else {
      setButtonText("Show More");
    }

    // change button text
  };
  return <button onClick={buttonClick}>{buttonText}</button>;
}
export default button;
