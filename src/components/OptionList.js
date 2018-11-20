import React from "react";
import { connect } from "react-redux";

import { checkCheckbox } from "./../store/actions";
import CheckListElement from "./CheckListElement";

const options = [
  { title: "Nullsteller/12 o'clock", id: "nullsteller" },
  { title: "LED-Performance Update", id: "led-performance" },
  { title: "Lenkradkranz (Carbon)", id: "lenkradkranz" },
  { title: "Lenkradtopf", id: "lenkradtopf" },
  { title: "Aufdicken/Aufpolstern", id: "aufdicken" },
  { title: "Startknopf", id: "startknopf" }
];

function OptionList(props) {
  return (
    <div>
      <h2>Optionsauswahl</h2>
      {options.map((option, i) => (
        <CheckListElement
          key={i}
          index={i}
          checkCheckbox={props.checkCheckbox}
          checkboxID={option.id}
          text={option.title}
          checked={props.checkedOptions.includes(option.id) ? true : false}
          onMouseEnter={null}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    checkedOptions: state.checkedOptions
  };
}

function mapDispatchToProps(dispatch) {
  return {
    checkCheckbox: checkboxID => {
      dispatch(checkCheckbox(checkboxID));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionList);
