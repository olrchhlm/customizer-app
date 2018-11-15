import React from "react";

function ColorPickerElement(props) {
  //make first letter capital
  let colorWithCapitalFirstLetter =
    props.clrEng.charAt(0).toUpperCase() + props.clrEng.slice(1);
  let handleClick = "props.choose" + colorWithCapitalFirstLetter + "()";

  // console.log(handleClick);
  //handleClick müsste als Funtion bei "onClick" vom Button eingesetzt werden --> wie?

  return (
    <button
      className="colorPickerElement"
      onClick={getColorChoosingFunction(props, props.clrEng)}
      id={props.clrEng}
    >
      <div> {props.clrGer} </div>
    </button>
  );
}

//Diese Funtion wird im Idealfall gar nicht gebraucht...
function getColorChoosingFunction(props, colorName) {
  if (colorName === "blue") {
    return props.chooseBlue;
  }
  if (colorName === "red") {
    return props.chooseRed;
  }
  if (colorName === "green") {
    return props.chooseGreen;
  }
}

export default ColorPickerElement;
