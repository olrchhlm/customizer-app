import React from "react";
import { connect } from "react-redux";

import CheckListElement from "./CheckListElement";

function OptionList(props) {
  return (
    <div>
      {props.options.map(option => (
        <CheckListElement handleClick={null} text={option.title} />
      ))}
    </div>
  );
}

// return props.options.map(option => (
//   <CheckListElement handleClick={null} text={option.title} />
// ));

function mapStateToProps(state) {
  return {
    options: state.options
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setItemChecked: index => {
      const action = { type: "BOX_CHECKED", payload: index };
      dispatch(action);
    },

    setItemUncheck: index => {
      const action = { type: "BOX_UNCHECKED", payload: index };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionList);
