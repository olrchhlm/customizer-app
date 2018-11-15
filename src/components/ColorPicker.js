import React from "react";
import { connect } from "react-redux";
import ColorPickerElement from "./ColorPickerElement";

// const colors = [
//   { clrGer: "blau", clrEng: "blue", clrCaps: "BLUE" },
//   { clrGer: "grün", clrEng: "green", clrCaps: "GREEN" },
//   { clrGer: "rot", clrEng: "red", clrCaps: "RED" }
// ];

function ColorPicker(props) {
  return (
    <div>
      {props.colors.map(color => (
        <ColorPickerElement
          clrGer={color.clrGer}
          clrEng={color.clrEng}
          clrCaps={color.clrCaps}
          chooseBlue={props.chooseBlue}
          chooseRed={props.chooseRed}
          chooseGreen={props.chooseGreen}
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
    currentColor: state.currentColor,
    colors: state.colors
  };
}

//Wo der Inhalt dieser Funktion am Ende hin?
function mapDispatchToProps(dispatch) {
  return {
    chooseBlue: () => {
      const action = { type: "COLOR_BLUE" };
      dispatch(action);
    },
    chooseGreen: () => {
      const action = { type: "COLOR_GREEN" };
      dispatch(action);
    },

    chooseRed: () => {
      const action = { type: "COLOR_RED" };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);
