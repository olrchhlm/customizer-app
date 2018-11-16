import React from "react";
import { connect } from "react-redux";

import { changeTextInput } from "./../store/actions";

function TextField(props) {
  return (
    <div>
      <h2>Anfragen und Wünsche</h2>
      <input
        value={props.currentTextInput}
        onChange={newText => props.changeTextInput(newText.target.value)}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentTextInput: state.currentTextInput
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTextInput: newText => {
      dispatch(changeTextInput(newText));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TextField);
