import { combineReducers } from "redux";
import anecReducer from "./anecReducer";
import notifyReducer from "./notifyReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  anec: anecReducer,
  notify: notifyReducer,
  filter: filterReducer,
});
