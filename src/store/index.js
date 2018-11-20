import { createStore } from "redux";

import {
  CHANGE_COLOR,
  CHECK_CHECKBOX,
  CHANGE_TEXT_INPUT,
  CHECK_RADIOBOX,
  CHANGE_MODEL,
  ACTIVATE_MOUSE_OVER
} from "./../store/actions";

const initialState = {
  modelPicked: "",
  currentColor: "",
  checkedOptions: [],
  currentTextInput: "",
  checkedRadiobox: [],
  currentImageHover: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_CHECKBOX: {
      let newCheckedOptions;

      if (state.checkedOptions.includes(action.checkboxID)) {
        newCheckedOptions = state.checkedOptions.filter(
          element => element !== action.checkboxID
        );
      } else {
        newCheckedOptions = [...state.checkedOptions, action.checkboxID];
      }
      return Object.assign({}, state, {
        checkedOptions: newCheckedOptions
      });
    }

    case CHECK_RADIOBOX: {
      let newCheckedOptions = [action.radioboxID];

      return Object.assign({}, state, {
        checkedRadiobox: newCheckedOptions
      });
    }

    case CHANGE_COLOR: {
      return Object.assign({}, state, {
        currentColor: action.newColor
      });
    }

    case CHANGE_MODEL: {
      return Object.assign({}, state, {
        modelPicked: action.newModel
      });
    }

    case CHANGE_TEXT_INPUT: {
      return Object.assign({}, state, { currentTextInput: action.newInput });
    }

    case ACTIVATE_MOUSE_OVER: {
      return Object.assign({}, state, { currentImageHover: action.materialID });
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
