import React, { Component } from "react";
import store from "./store/";

import "./App.css";
import TextField from "./components/TextField";
import ColorPicker from "./components/ColorPicker";
import OptionList from "./components/OptionList";
import MaterialChoice from "./components/MaterialChoice";
import YourChoices from "./components/YourChoices";
import ModelPicker from "./components/ModelPicker";

class App extends Component {
  render() {
    return (
      <div id="multirow">
        <div>
          <YourChoices store={store} />
        </div>
        <div>
          <ModelPicker store={store} />
          <MaterialChoice store={store} />
          <ColorPicker store={store} />
          <OptionList store={store} />
          <TextField store={store} />
        </div>
      </div>
    );
  }
}

export default App;
