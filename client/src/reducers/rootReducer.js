import showWorldChart from "./showWorldChart";
import showIndiaChart from "./showIndiaChart";
import worldApiData from "./worldApiData";
import indiaApiData from "./indiaApiData";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  showWorldChart,
  showIndiaChart,
  worldApiData,
  indiaApiData,
});

export default rootReducer;
