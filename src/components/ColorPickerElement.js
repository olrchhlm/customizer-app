import React from "react";

function ColorPickerElement(props) {
  return (
    <button
      className="colorPickerElement"
      onClick={() => props.chooseColor(props.clrCaps)}
      id={props.clrEng}
    >
      <div> {props.clrGer} </div>
    </button>
  );
}

export default ColorPickerElement;
