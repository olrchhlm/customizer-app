import React from "react";

function ColorPickerElement(props) {
  return (
    <button
      onClick={() => props.changeColor(props.clrGer)}
      className="color-picker-button"
    >
      <div> {props.clrGer} </div>
    </button>
  );
}

export default ColorPickerElement;
