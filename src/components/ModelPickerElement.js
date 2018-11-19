import React from "react";

function ModelPickerElement(props) {
  return (
    <button
      onClick={() => props.changeColor(props.clrGer)}
      className="color-picker-button"
    >
      <div> {props.clrGer} </div>
    </button>
  );
}

export default ModelPickerElement;
