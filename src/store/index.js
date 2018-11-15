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
    { clrGer: "rot", clrEng: "red", clrCaps: "RED" },
    { clrGer: "gelb", clrEng: "yellow", clrCaps: "GELB" }
  ]
};

const reducer = (state = initialState, action) => {
  if (action.type.includes("COLOR_")) {
    let givenColorInCaps = action.type.replace("COLOR_", "");
    let indexOfNewColor = state.colors.findIndex(
      color => color.clrCaps === givenColorInCaps
    );

    return Object.assign({}, state, {
      currentColor: state.colors[indexOfNewColor].clrGer
    });
  }

  switch (action.type) {
    case "INCREMENT": {
      return Object.assign({}, state, { count: state.count + 1 });
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
