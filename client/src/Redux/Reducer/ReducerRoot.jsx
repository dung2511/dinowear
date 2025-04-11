import { combineReducers } from "redux";
import ReducerCart from "./ReducerCart";
import ReducerSession from "./ReducerSession";
import ReducerCount from "./ReducerCount";

const ReducerRoot = combineReducers({
  Cart: ReducerCart,
  Session: ReducerSession,
  Count: ReducerCount,
});

export default ReducerRoot;
