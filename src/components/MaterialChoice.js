import React from "react";
import { connect } from "react-redux";

import { checkRadiobox } from "./../store/actions";
import CheckListElement from "./CheckListElement";
import { activateMouseOver } from "./../store/actions";

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
      <h2>Materialauswahl</h2>
      {options.map((option, i) => (
        <CheckListElement
          key={i}
          index={i}
          checkCheckbox={props.checkRadiobox}
          checkboxID={option.id}
          text={option.title}
          checked={props.checkedRadiobox.includes(option.id) ? true : false}
          onMouseEnter={props.activateMouseOver}
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
    },
    activateMouseOver: materialID => {
      dispatch(activateMouseOver(materialID));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MaterialChoice);
