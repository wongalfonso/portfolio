import { combineReducers } from "redux";
import LoginReducer from "./components/Login/LoginReducer"

const rootReducer = combineReducers({
  user: LoginReducer
});

export default rootReducer;