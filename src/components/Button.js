import React from "react";

function Button(props) {
  return (
    <button
      className={props.className}
      onClick={(event) => props.onClickButton(event)}
    >
      {/* https://www.jsdiaries.com/how-to-fix-cannot-read-property-preventdefault-of-undefined/ */}
      {props.title}
    </button>
  );
}

export default Button;
