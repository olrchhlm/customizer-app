import React from "react";
import { connect } from "react-redux";

const materials = [
  { id: "carbon", dataValue: "blue" },
  { id: "lochleder", dataValue: "red" },
  { id: "glattleder", dataValue: "green" },
  { id: "alcantara", dataValue: "yellow" },
  { id: "kunstleder", dataValue: "orange" }
];

function PreviewImage(props) {
  return (
    <div
      className="preview-image"
      id={findMatchingDataValue(props.currentImageHover)}
    >
      <div>{props.currentImageHover}</div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    currentImageHover: state.currentImageHover
  };
}

const findMatchingDataValue = givenID => {
  if (!givenID) {
    return null;
  }
  const matchingItem = materials.find(item => item.id === givenID);
  return matchingItem.dataValue;
};

export default connect(mapStateToProps)(PreviewImage);
