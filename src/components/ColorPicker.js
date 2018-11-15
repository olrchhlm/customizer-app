import React from "react";
import { connect } from "react-redux";
import ColorPickerElement from "./ColorPickerElement";

function ColorPicker(props) {
  return (
    <div>
      {props.colors.map((color, i) => (
        <ColorPickerElement
          key={i}
          clrGer={color.clrGer}
          clrEng={color.clrEng}
          clrCaps={color.clrCaps}
          chooseColor={props.chooseColor}
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

function mapDispatchToProps(dispatch) {
  return {
    chooseColor: clrCaps => {
      const action = { type: "COLOR_" + clrCaps };
      dispatch(action);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ColorPicker);
