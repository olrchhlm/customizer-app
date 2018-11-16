import React from "react";

function CheckListElement(props) {
  return (
    <div className="CheckListElement">
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
