import React from "react";
import { connect } from "react-redux";

import { checkRadiobox } from "./../store/actions";
import CheckListElement from "./CheckListElement";

const options = [
  { title: "Carbon", id: "carbon" },
  { title: "Lochleder ", id: "lochleder" },
  { title: "Glattleder", id: "glattleder" },
  { title: "Alcantara", id: "alcantara" },
  { title: "Kunstleder", id: "kunstleder" }
];

function MaterialChoice(props) {
  return (
    <div>
      <h2>Radiobuttons</h2>
      {options.map((option, i) => (
        <CheckListElement
          key={i}
          index={i}
          checkCheckbox={props.checkRadiobox}
          checkboxID={option.id}
          text={option.title}
          checked={props.checkedRadiobox.includes(option.id) ? true : false}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    checkedRadiobox: state.checkedRadiobox
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkRadiobox: checkboxID => {
      dispatch(checkRadiobox(checkboxID));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialChoice);
