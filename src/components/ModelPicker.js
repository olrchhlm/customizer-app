import React from "react";
import { connect } from "react-redux";
import ModelPickerElement from "./ModelPickerElement";
import { changeModel } from "./../store/actions";

const colors = [
  { model: "Modell 1", id="first-model" },
  { model: "Modell 2",  id="first-model"},
  { model: "Modell 3", id="first-model"}
];

function ModelPicker(props) {
  return (
    <div>
      <h2>Farbauswahl</h2>
      {colors.map((color, i) => (
        <ModelPickerElement
          key={i}
          clrGer={color.clrGer}
          clrEng={color.clrEng}
          clrCaps={color.clrCaps}
          changeColor={props.changeColor}
        />
      ))}

      <div>
        <p>Gewähltes Modell: {props.modelPicked}</p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    modelPicked: state.modelPicked
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeModel: newModel => {
      dispatch(changeModel(newModel));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelPicker);
