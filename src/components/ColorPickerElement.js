import React from "react";

function ColorPickerElement(props) {
  return (
    <button
      className="colorPickerElement"
      onClick={() => props.changeColor(props.clrGer)}
      class="color-picker-button"
    >
      <div> {props.clrGer} </div>
    </button>
  );
}

export default ColorPickerElement;
