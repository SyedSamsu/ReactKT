import { combineReducers } from "redux";
import allBookReducer from "./AllBookReducer";
import counterReducer from "./CounterReducer";
import statusReducer from "./StatusReducer";


const rootReducer = combineReducers({
  counter : counterReducer,
  status : statusReducer,
  allbook:allBookReducer,
})

export default rootReducer