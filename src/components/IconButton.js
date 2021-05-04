import React from "react";

function IconButton(props) {
  return (
    <button className="Button" onClick={() => props.onClickButton()}>
      {props.title}
    </button>
  );
}

export default IconButton;


