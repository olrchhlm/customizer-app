import React, { Component } from "react";
import "./App.css";
//import Counter from "./Counter";
import store from "./store/";
import ColorPicker from "./components/ColorPicker";
import OptionList from "./components/OptionList";

class App extends Component {
  render() {
    //Counter Component not included <Counter store={store} />
    return (
      <div>
        <ColorPicker store={store} />
        <OptionList store={store} />
      </div>
    );
  }
}

export default App;
