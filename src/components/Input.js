import React from "react";

function Input(props) {
  return (
    <input
      className={props.className}
      placeholder={props.title}
      value={props.value}
      onChange={(e) => props.inputChange(e.target.value)}
    ></input>
  );
}

export default Input;

// onChange={() => props.onClickButton(props.value)}
