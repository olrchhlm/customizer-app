import React from "react";

function CheckListElement(props) {
  return (
    <div
      className="CheckListElement"
      onMouseEnter={
        props.onMouseEnter ? () => props.onMouseEnter(props.checkboxID) : null
      }
    >
      <input
        type="checkbox"
        onClick={() => props.checkCheckbox(props.checkboxID)}
        checked={props.checked}
      />
      <div> {props.text} </div>
    </div>
  );
}

export default CheckListElement;
