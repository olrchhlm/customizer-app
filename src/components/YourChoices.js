import React from "react";
import { connect } from "react-redux";

function YourChoices(props) {
  return (
    <div>
      <h2> Zusammenfassung Ihrer Auswahl</h2>
      <ul>
        <li>{props.modelPicked}</li>
        <li>{props.checkedRadiobox}</li>
        <li>{props.currentColor}</li>
        <li>{props.checkedOptions}</li>
        <li>{props.currentTextInput}</li>
      </ul>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modelPicked: state.modelPicked,
    currentColor: state.currentColor,
    checkedOptions: state.checkedOptions,
    currentTextInput: state.currentTextInput,
    checkedRadiobox: state.checkedRadiobox
  };
}

export default connect(mapStateToProps)(YourChoices);
