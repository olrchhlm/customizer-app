export const CHANGE_COLOR = "CHANGE_COLOR";

export const CHECK_CHECKBOX = "CHECK_CHECKBOX";

export const CHANGE_TEXT_INPUT = "CHANGE_TEXT_INPUT";

export const CHECK_RADIOBOX = "CHECK_RADIOBOX";

export const CHANGE_MODEL = "CHANGE_MODEL";

export const ACTIVATE_MOUSE_OVER = "ACTIVATE_MOUSE_OVER";

export function changeModel(newModel) {
  return { type: CHANGE_MODEL, newModel };
}

export function changeColor(newColor) {
  return { type: CHANGE_COLOR, newColor };
}

export function checkCheckbox(checkboxID) {
  return { type: CHECK_CHECKBOX, checkboxID };
}

export function changeTextInput(newInput) {
  return { type: CHANGE_TEXT_INPUT, newInput };
}

export function checkRadiobox(radioboxID) {
  return { type: CHECK_RADIOBOX, radioboxID };
}

export function activateMouseOver(materialID) {
  return { type: ACTIVATE_MOUSE_OVER, materialID };
}
