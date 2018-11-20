import React from "react";
import { connect } from "react-redux";
import ModelPickerElement from "./ModelPickerElement";
import { changeModel } from "./../store/actions";

const models = [
  { title: "Modell 1", modelID: "first-model" },
  { title: "Modell 2", modelID: "second-model" },
  { title: "Modell 3", modelID: "third-model" }
];

function ModelPicker(props) {
  return (
    <div>
      <div onClick={props.displayOnClick} className="CheckListElement">
        <h2>Modell Auswahl</h2>
        <i
          id="model-arrow"
          className="far fa-arrow-alt-circle-down dropdown-arrow"
        />
      </div>
      <div id="modelChoice" className="hide">
        {models.map((model, i) => (
          <ModelPickerElement
            key={i}
            title={model.title}
            changeModel={props.changeModel}
            modelID={model.modelID}
          />
        ))}

        <div>
          <p>Gewähltes Modell: {props.modelPicked}</p>
        </div>
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
    },
    displayOnClick: () => {
      let modelChoice = document.getElementById("modelChoice");
      let modelArrow = document.getElementById("model-arrow");
      if (modelChoice.classList.contains("hide")) {
        modelChoice.classList.toggle("show");
        modelChoice.classList.remove("hide");
        modelArrow.classList.toggle("flip");
      } else {
        modelChoice.classList.toggle("hide");
        modelChoice.classList.remove("show");
        modelArrow.classList.remove("flip");
      }
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModelPicker);
