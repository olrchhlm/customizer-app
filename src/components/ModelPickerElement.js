import React from "react";

function ModelPickerElement(props) {
  return (
    <button
      onClick={() => props.changeModel(props.modelID)}
      className="model-picker-button"
    >
      <div> {props.title} </div>
    </button>
  );
}

export default ModelPickerElement;
