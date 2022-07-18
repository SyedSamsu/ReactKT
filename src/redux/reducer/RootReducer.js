import { combineReducers } from "redux";
import counterReducer from "./CounterReducer";
import statusReducer from "./StatusReducer";


const rootReducer = combineReducers({
  counter : counterReducer,
  status : statusReducer
})

export default rootReducer