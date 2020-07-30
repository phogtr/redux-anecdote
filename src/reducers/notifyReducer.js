import { DISPLAY } from "../actions/types";

export default function (state = null, action) {
  switch (action.type) {
    case DISPLAY:
      return action.payload;

    default:
      return state;
  }
}
