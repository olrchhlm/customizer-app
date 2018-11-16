import React from "react";
import { connect } from "react-redux";
import ColorPickerElement from "./ColorPickerElement";
import { changeColor } from "./../store/actions";

const colors = [
  { clrGer: "blau", clrEng: "blue", clrCaps: "BLUE" },
  { clrGer: "grün", clrEng: "green", clrCaps: "GREEN" },
  { clrGer: "rot", clrEng: "red", clrCaps: "RED" },
  { clrGer: "gelb", clrEng: "yellow", clrCaps: "YELLOW" }
];

function ColorPicker(props) {
  return (
    <div>
      <h2>Farbauswahl</h2>
      {colors.map((color, i) => (
        <ColorPickerElement
          key={i}
          clrGer={color.clrGer}
          clrEng={color.clrEng}
          clrCaps={color.clrCaps}
          changeColor={props.changeColor}
        />
      ))}

      <div>
        <p>Gewählte Farbe: {props.currentColor}</p>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentColor: state.currentColor
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeColor: newColor => {
      dispatch(changeColor(newColor));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);
