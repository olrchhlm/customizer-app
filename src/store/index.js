import { createStore } from "redux";

const initialState = {
  count: 8,
  currentColor: "weiß",
  options: [
    { title: "Carbon", checked: false },
    { title: "Lochleder", checked: false },
    { title: "Glattleder", checked: false },
    { title: "Alcantara", checked: false }
  ],
  colors: [
    { clrGer: "blau", clrEng: "blue", clrCaps: "BLUE" },
    { clrGer: "grün", clrEng: "green", clrCaps: "GREEN" },
    { clrGer: "rot", clrEng: "red", clrCaps: "RED" }
  ]
};

const reducer = (state = initialState, action) => {
  console.log("reducer-running", action);

  switch (action.type) {
    case "INCREMENT": {
      return Object.assign({}, state, { count: state.count + 1 });
    }

    case "COLOR_BLUE": {
      return Object.assign({}, state, { currentColor: "blau" });
    }
    case "COLOR_RED": {
      return Object.assign({}, state, { currentColor: "rot" });
    }
    case "COLOR_GREEN": {
      return Object.assign({}, state, { currentColor: "grün" });
    }

    default:
      return state;
  }
};

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
