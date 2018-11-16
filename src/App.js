import React, { Component } from "react";
import store from "./store/";

import "./App.css";
import TextField from "./components/TextField";
import ColorPicker from "./components/ColorPicker";
import OptionList from "./components/OptionList";
import MaterialChoice from "./components/MaterialChoice";

class App extends Component {
  render() {
    return (
      <div>
        <ColorPicker store={store} />
        <OptionList store={store} />
        <TextField store={store} />
        <MaterialChoice store={store} />
      </div>
    );
  }
}

export default App;
